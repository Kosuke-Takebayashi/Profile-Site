// チェックボックスの取得
const btn = document.querySelector("#btn-mode");

// 切り替えボタンの取得
const btnSwitch = document.querySelector("#btn-switch");

// ダークモード
const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
const darkModeOn = darkModeMediaQuery.matches;

// チェックした時の挙動
btn.addEventListener("change", () => {
    if (btn.checked == true) {
        // ダークモード
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        btnSwitch.textContent = "ライト";
    } else {
        // ライトモード
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        btnSwitch.textContent = "ダーク";
    }
});

// ページ読み込み時にダークモードの場合は、チェックを付ける
if (darkModeOn) {
    // Dark
    btn.checked = true;
    btnSwitch.textContent = "ライト";
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
} else {
    btnSwitch.textContent = "ダーク";
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
}
