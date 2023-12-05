#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod commands;
mod core;
mod utilities;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![commands::search])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
