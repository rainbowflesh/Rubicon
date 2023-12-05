#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod core;
mod utilities;

#[tauri::command]
fn search(search_keyword: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", search_keyword)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![search])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
