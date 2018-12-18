var svgHeight = 235
var barElements;
var dataSet = [120, 70, 175, 80, 220];



// var offset 만들기
var offsetX = 40;
var offsetY = 10;


// range limit 정의
var y_range_limit = 300;

var interval = 5;


//그래프에 눈금 표시
var y = d3.scaleLinear() // 눈금의 종류를 지정
  .range([y_range_limit, 0]) // 세로형 막대그래프는 range() 반대
  .domain([0, 300])

var yScale = d3.axisLeft(y)
  .tickValues(d3.range(0, 301, 50)) // 0~301 까지 
  .tickFormat(function (d) {
    return " $" + d
  })

// g :  모 든 그 래 프 요 소 를 말 함
d3.select("#myGraph").append("g") // 눈금은 g 요소를 사용하여 그룹
  .attr("class", "axis") // axis 라는 class 이름 지정
  // 중요 !! transform 변경
  //.attr("transform", "translate(40, 0)")  // 눈금 표시위치 transform 으로 조정
  .attr("transform", "translate(" + offsetX + ", " + ((svgHeight - y_range_limit) - offsetY) + ")") // 눈금 표시위치 transform 으로 조정
  // == ("transform"), "translate(40,-70)"
  .call(yScale)



//그래프 그리기
//select myGraph 
barElements = d3.select("#myGraph")
// rect all
  .selectAll("rect")
  // data를 읽어
  .data(dataSet)


// 실제로 rect 를 그리는 부분
barElements.enter()
  .append("rect")
  .attr("class", "bar") // defined in the css file
  .attr("height", function (d) {
    // for debug
    // console.log(d);
    return d;
  })
  .attr("width", "20")
  
  // x start point : left, The more you go to the right, the bigger the value.
  .attr("x", function (d, i) { // d = data, i = index
    // for debug
    console.log(i);
    return i * 30 + offsetX;
  })

  // y start poing : top, The lower the value, the larger the value. 
  .attr("y", function (d) {
    // 
    return svgHeight - d - offsetY;
  })

  

// draw Text
textElements = d3.select("#myGraph")
  .selectAll("#barNum")
  .data(dataSet)

textElements.enter()
  .append("text")
  .attr("class", "barNum")
  // position
  .attr("x", function (d, i) {
    return i * 30 + 10 + offsetX;
  })
  .attr("y", svgHeight - 5 - offsetY)
  // data
  .text(function (d) {
    return d;
  })



// X 설명
d3.select("#myGraph").append("rect")
  .attr("class", "axis_x")
  .attr("width", 320)
  .attr("height", 1)
  //.attr("transform", "translate(40, 10)")
  .attr("transform", "translate(" + offsetX + ", " + ((svgHeight) - offsetY) + ")")

xElements = d3.select("#myGraph")
  .selectAll("#barName")
  .data(dataSet)

xElements.enter()
  .append("text")
  .attr("class", "barName")
  .attr("x", function (d, i) {
    return i * 30 + 10 + interval + offsetX
  })
  .attr("y", svgHeight + 15 - offsetY)
  .text(function (d, i) {
    return ["A", "B", "C", "D", "E"][i];
  })


//        .exit()
// 