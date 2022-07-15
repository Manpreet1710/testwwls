let mobile_bars = document.querySelector(".mobile_bars")
let close_bar_btn = document.querySelector(".close_bar_btn")
mobile_bars.addEventListener("click", () => {
  console.log("true")
  document.querySelector("#open_list_bar").style.left = "0%"
})

close_bar_btn.addEventListener("click", () => {
  document.querySelector("#open_list_bar").style.left = "-100%"
})


document.addEventListener('click', (event) => {
  const withinBoundaries = event.composedPath().includes(mobile_bars)
  if (!withinBoundaries) {
    document.querySelector("#open_list_bar").style.left = "-100%"
  }
})
