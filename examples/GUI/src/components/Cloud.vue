<script lang="ts" setup>
import { reactive, ref, watch, computed } from "vue";
import { Api } from "@/utils/Http";
import { CloudResponse, List } from "@/utils/type/CloudResponse";
import { timestampToTime } from "@/utils/Utils";
import { SearchMusicResultSingle } from "@/utils/type/BasicType";
import { SystemStore } from "@/store/SystemStore";
import { ElNotification } from "element-plus";

const lst = ref<CloudResponse>();
const modifyMusicInfo = ref(false);

const fetchAllSongs = () => {
  Api.getNeteaseCloud().then((r) => {
    lst.value = {} as CloudResponse;
    lst.value = r;
  });
};

const handleDel = (row: List) => {
  Api.delNeteaseCloud().then((r) => {});
  console.log(row);
};

const formLabelWidth = "140px";
const searchKey = ref("");
const filterText = ref("");
const musicID = ref();
const { basicStore } = SystemStore();

const searchLstCache = ref<SearchMusicResultSingle[]>();

watch(searchKey, (value, oldValue, onCleanup) => {
  console.log(value);
  Api.searchMusic(encodeURIComponent(value), 1, "wyy", 100).then((r) => {
    musicID.value = undefined;
    searchLstCache.value = r.list;
    console.log(searchLstCache.value);
  });
});

const tableLst = computed(() => lst.value?.list.filter((data) => data.fileName.includes(filterText.value)));

const getSongDesc = (item: SearchMusicResultSingle) => {
  return item.singer + " - " + item.title + " ｜ " + item.album;
};

let waitModifyData = ref<List>({} as List);
const handleModify = (row: List) => {
  waitModifyData.value = row;
  modifyMusicInfo.value = !modifyMusicInfo.value;
  searchKey.value = waitModifyData.value.songName + " " + waitModifyData.value.artist;
  console.log(row);
};

const submitModify = (asid: number) => {
  Api.bindSid2Asid({
    sid: waitModifyData.value.songId,
    asid: asid,
    uid: basicStore.netease.user.account.id,
  }).then((r) => {
    if (r.code === 200) {
      ElNotification({
        title: "success",
        message: "User info success changed。",
        type: "success",
      });
      modifyMusicInfo.value = !modifyMusicInfo.value;
    } else {
      ElNotification({
        title: "error",
        message: r.message,
        type: "error",
      });
    }
  });
};

fetchAllSongs();
</script>

<template>
  <div class="content" v-if="lst">
    <h1>Cloud disk correction {{ lst.hasMore ? "More" : "No More" }}</h1>
    <el-table class="my-tb" :data="tableLst" style="width: 100%; z-index: 0">
      <el-table-column
        :formatter="
                (row:List) => {
                  return timestampToTime(row.addTime).split(' ')[0]
                }
              "
        prop="publishTime"
        label="Publish Time"
        width="120"
      />
      <el-table-column :show-overflow-tooltip="true" prop="songName" label="Title" min-width="300" />
      <el-table-column
        :show-overflow-tooltip="true"
        :formatter="(row:List) => {
                  return row.artist
                }"
        prop="singer.name"
        label="Artist"
        width="200"
      />
      <el-table-column :show-overflow-tooltip="true" prop="album" label="Album" width="200" />
      <el-table-column fixed="right" min-width="100">
        <template #header>
          <el-input v-model="filterText" size="default" placeholder="Input filter" />
        </template>
        <template #default="scope">
          <el-button type="primary" size="small" @click="handleModify(scope.row)">Change</el-button>
          <el-button type="danger" size="small" @click="handleDel(scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <el-dialog v-model="modifyMusicInfo" :title="'Change Track Information - ' + waitModifyData.fileName">
    <el-form>
      <el-form-item label="Current track recognition data" :label-width="formLabelWidth">
        <el-descriptions :title="waitModifyData.fileName" :column="3" border>
          <el-descriptions-item label="Track" label-align="right" align="left"
            >{{ waitModifyData.songName }}
          </el-descriptions-item>
          <el-descriptions-item label="Artist" label-align="right" align="left"
            >{{ waitModifyData.artist }}
          </el-descriptions-item>
          <el-descriptions-item label="Album" label-align="right" align="center"
            >{{ waitModifyData.album }}
          </el-descriptions-item>
          <el-descriptions-item label="Filename" label-align="right" align="left">
            <el-tag size="small">{{ waitModifyData.fileName }}</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="Search Keyword" label-align="right" align="left">
            {{ waitModifyData.songName + " " + waitModifyData.artist }}
          </el-descriptions-item>
        </el-descriptions>
      </el-form-item>
      <el-form-item label="Search by track" :label-width="formLabelWidth">
        <el-input v-model="searchKey" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Server Result" :label-width="formLabelWidth">
        <el-select v-model="musicID" placeholder="Select Result">
          <el-option v-for="inx in searchLstCache" :label="getSongDesc(inx)" :value="inx.musicid" />
        </el-select>
      </el-form-item>
      <el-form-item label="Specify track ID" :label-width="formLabelWidth">
        <el-input v-model="musicID" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="modifyMusicInfo = false">Cancel</el-button>
        <el-button type="danger" @click="submitModify(0)">Cancel match</el-button>
        <el-button type="primary" @click="submitModify(musicID)">Conform match</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
.content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
