const colors = ["#d19da1", "#85bfe4", "#f3c4d6", "#f9cab0", "#ebb346", "#a06d52", "#addbce", "#6bb199", "#e9b83f", "#f4a74f", "#cd7d8a", "#fce0dd", "#f6a8b6", "#be82a4", "#9898be", "#477baa", "#edbe6c", "#e78a83", "#9ea9d6", "#d8f0fc", "#c3e4f7", "#b5bc78", "#f8adb1", "#e58994", "#a52a25", "#f3d040", "#f26d44",
    "#dcc29f", "#d6a3aa", "#e6dce5", "#ecc3c1", "#eeac89", "#b26e47", "#f7d1de", "#f5a5c2", "#fbf3cc", "#f9ce66", "#b36e44", "#87acb4", "#9fd9e4", "#f3e2aa", "#f2ceac", "#eacfc8", "#cab5ba", "#f5dfae", "#c0ce91", "#e58994", "#919191", "#e2c7c0", "#f7dcd3", "#b2d8eb", "#81b5cb", "#5f9198", "#e2f4f8",
    "#b1c4e4", "#e57d70", "#e3b9a3", "#e3b9a3", "#ffd98e", "#218664", "#2d9193", "#b2dfda", "#5b97af", "#fbbe9f", "#e4895a", "#ad5e95", "#9987c1", "#e99386", "#fab58b", "#eaccc1", "#b3ddd3", "#d7e6a3", "#ccbddc", "#f5969a", "#f7b7cf", "#fbcc98", "#8ac8b9", "#c5d7bf", "#f68d78", "#4daee3", "#f16184",
    "#c8aed3", "#ad9d8d", "#d1c3b6", "#ddc1bd", "#f2f2f2", "#c0c0c0", "#b4b2d9", "#d0b2d6", "#fbbf77", "#f5a791", "#f8a482", "#f49495", "#f7afbb", "#fbdddd", "#ceab8d", "#f8a68e", "#efed86", "#e0e78a", "#f5f08a", "#bac9b2", "#b8ddaa", "#75a494", "#8fcfb4", "#a9dbd2", "#6899aa", "#86bae2", "#a5c6e7",
    "#b19ecc", "#846a53", "#8095cc", "#90c4eb", "#b3bde1", "#ba8bbf", "#8869a5", "#6f8ba3", "#79ceed", "#c5e7f1", "#c4e5de", "#7fcec9", "#ee7179", "#cd69a7", "#f383b5", "#f6a1a6", "#d4d4d4", "#dedede", "#ececec", "#fbfdfc", "#f6f7f9", "#2b5c6b", "#c57a50", "#90482f", "#53484c", "#7b7f33", "#78a260",
    "#aaa9d3", "#dcc8e1", "#eff1af", "#faf496", "#dadee9", "#d4e5f7", "#eddfdc", "#d7e6d3", "#f1dfed", "#f1ece8", "#ee6ca8", "#e1cbe2", "#f8acb0", "#fbe6af", "#faf5b1", "#e7edaf", "#a3d8c4", "#bfe7f3", "#bacbe9", "#caaed4", "#caaed4", "#989c9f", "#f3787a", "#548a4c", "#1cadd9", "#fdba13", "#ef4744",
    "#d7e6a3", "#fbe494", "#ded1d8", "#d0e3f4", "#ebcad1", "#bfe0d5", "#e7d9ea", "#f4f6e1", "#d873ad", "#efcee3", "#f8adb1", "#f29f9b", "#fac9a9", "#badb96", "#96d5cd", "#afe1f8", "#9ea5d3", "#b19ecc", "#978dc2", "#9997c9", "#a6caec", "#80cfd4", "#b8db97", "#fbdd9f", "#fdc9a1", "#f5b19e", "#f8adb1",
    "#f2e9b2", "#e1c9e1", "#b1dcc0", "#d2a8ac", "#bec3e3", "#c3b0a9", "#fbc094", "#9cd6ca", "#8ed4dc", "#fdce9a", "#d7d1c5", "#c3d9f0", "#e3c4c2", "#bde2d0", "#eacee4", "#efe6bf", "#b973b1", "#f9cade", "#f7aab0", "#eb8b97", "#f9ae99", "#f2c196", "#9ccf8a", "#7fcfd8", "#9bcdee", "#9996cb", "#998cc2",
    "#ddabd0", "#ddabd0", "#f59db3", "#d87e9a", "#e39593", "#8dcea6", "#f7a194", "#98b9e2", "#7dbfd9", "#998cc2", "#878ec5", "#7f9acf", "#9a7eb9", "#8b92c8", "#81ccb7", "#e78288", "#de87a7", "#cf84ab", "#ffebd3", "#e2cbbb", "#5174b6", "#fbd292", "#d3add2", "#92bd92", "#b78390", "#90abc8", "#a48489",
    "#87cba2", "#8e8bc2", "#353130", "#fce7f0", "#fef5f8", "#fce7f0", "#c48a88", "#876975", "#fbd5e4", "#c8d6d9", "#cbd6c8", "#d3a3a3", "#ffe49f", "#cce3f5", "#f9f8cc", "#ed1459", "#d086ab", "#faa650", "#ceced6", "#a6abc1", "#ebc3dd", "#6d81be", "#8f6f64", "#e3c4c2", "#a0ccbf", "#d9e47c", "#cfdbd7"];

const btn = document.getElementById("color-btn");
const colorHex = document.getElementById("color-hex");
const textColor = document.getElementById("text-color");

btn.addEventListener("click", () => {
    const getRandom = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[getRandom];
    colorHex.innerHTML = `${colors[getRandom]}`;
    colorHex.style.color = colors[getRandom];
});
