const { Plugin } = require("obsidian");

module.exports = class WrapPlugin extends Plugin {
  onload() {
    const styles = [
      { id: "main",   name: "🔴 Главная тема",           class: "text-main",   hotkey: "1" },
      { id: "sub",    name: "🟡 Подтема",                class: "text-sub",    hotkey: "2" },
      { id: "bold",   name: "🩷 Важный термин",          class: "text-bold",   hotkey: "3" },
      { id: "default",name: "⚪️ Обычный стиль",          class: "text-default",hotkey: "4" },
      { id: "success",name: "🟢 Успешно выполнено",       class: "text-success",hotkey: "5" },
      { id: "danger", name: "❤️ Ошибка",                class: "text-danger", hotkey: "6" },
      { id: "blue",   name: "🔵 Примечание или ссылка", class: "text-blue",   hotkey: "7" },
      { id: "purple", name: "🟣 Промежуточный результат", class: "text-purple", hotkey: "8" },
      { id: "note",   name: "🟦 Дополнительная заметка", class: "text-note",   hotkey: "9" },
      { id: "pink",   name: "💖 Эмоциональный коммент.", class: "text-pink",   hotkey: "0" },
    ];

    for (const style of styles) {
      this.addCommand({
        id: `wrap-in-${style.id}`,
        name: `Обернуть в <span class="${style.class}"> — ${style.name}`,
        editorCallback: (editor) => {
          const selected = editor.getSelection();
          editor.replaceSelection(`<span class="${style.class}">${selected}</span>`);
        },
        hotkeys: [
          {
            modifiers: ["Mod", "Shift"],
            key: style.hotkey
          }
        ]
      });
    }
  }

  onunload() {
    console.log("WrapPlugin unloaded");
  }
};
