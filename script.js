const timer = document.querySelector('#timer')
const founding = new Date(2013, 0, 1)
const updateTimer = () => timer.textContent = Math.ceil((new Date() - founding) / 1000)
updateTimer()
setInterval(updateTimer, 500)
