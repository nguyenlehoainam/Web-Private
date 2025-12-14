// Hàm xóa màn hình console
function clearConsole() {
  console.clear();
}

// Hàm vẽ cây thông
function printTree() {
  const tree = [
    "            * ",
    "           *** ",
    "         ******* ",
    "       *********** ",
    "     *************** ",
    "   ******************* ",
    " ***********************  ",
    "          ***** ",
    "          ***** ",
  ];

  //   Danh sách mã màu ANSI
  const colors = [
    "\x1b[31m",
    "\x1b[32m",
    "\x1b[33m",
    "\x1b[34m",
    "\x1b[35m",
    "\x1b[36m",
  ];

  const resetColor = "\x1b[0m";

  tree.forEach((line) => {
    let lineOutput = "";

    for (let char of line) {
      if (char === "*") {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        lineOutput += randomColor + char;
      } else {
        lineOutput += char;
      }
    }
    console.log(lineOutput + resetColor);
  });
}

function main() {
  setInterval(() => {
    clearConsole();
    printTree();
  }, 500);
}
if (require.main === module) {
  main();
}
