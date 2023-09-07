// 실제 API에서 데이터를 가져오는 대신 더미 데이터를 사용합니다.
const dummyBusData = [
    { id: 1, route: "101", location: { x: 100, y: 150 } },
    { id: 2, route: "102", location: { x: 200, y: 250 } },
    { id: 3, route: "103", location: { x: 300, y: 350 } }
];

function displayBusLocations() {
    const busLocationElement = document.getElementById("bus-location");
    busLocationElement.innerHTML = ""; // 이전 내용을 지웁니다.

    dummyBusData.forEach(bus => {
        const busCircle = document.createElement("div");
        busCircle.className = "bus-circle";
        busCircle.style.left = `${bus.location.x}px`;
        busCircle.style.top = `${bus.location.y}px`;

        const busInfo = document.createElement("p");
        busInfo.textContent = `버스 번호 ${bus.route}`;
        busCircle.appendChild(busInfo);

        busLocationElement.appendChild(busCircle);
    });
}

// 일정한 시간마다 버스 위치를 업데이트합니다.
setInterval(displayBusLocations, 60000); // 1분마다 업데이트

// 페이지 로드 시 처음 한 번 호출하여 초기 데이터를 표시합니다.
displayBusLocations();
