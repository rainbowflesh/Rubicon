#[tauri::command]
pub fn search(search_source: &str, search_keyword: &str) -> String {
    format!(
        "Search parameters: search_source:{}; search_keyword:{}",
        search_source, search_keyword
    )
}
