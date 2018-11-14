var svgHeight =235
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
              .range([y_range_limit,0]) // 세로형 막대그래프는 range() 반대
              .domain([0,300])

var yScale = d3.axisLeft(y)
			  .tickValues(d3.range(0,301,50)) // 0~301 까지 
			  .tickFormat(function(d){ return " $" + d})

d3.select("#myGraph").append("g") // 눈금은 g 요소를 사용하여 그룹
          .attr("class", "axis")  // axis 라는 class 이름 지정
          // 중요 !! transform 변경
          //.attr("transform", "translate(40, 0)")  // 눈금 표시위치 transform 으로 조정
          .attr("transform", "translate("+offsetX + ", "+((svgHeight-y_range_limit)-offsetY)+")")  // 눈금 표시위치 transform 으로 조정
          // == ("transform"), "translate(40,-70)"
		  .call(yScale)
		  


//그래프 그리기
//myGraph 전체에 사각형을 읽고
barElements = d3.select("#myGraph")
              .selectAll("rect")
              // data를 읽어
              .data(dataSet)

    // 실제로 rect 를 그리는 부분
    barElements.enter()
    			.append("rect")
    			.attr("class", "bar")
    			.attr("height", function(d){
    				// console.log(d);
    				return d;
    			})
    			.attr("width", "20")
    			.attr("x", function(d,i){
    				console.log(i);
    				return i * 30 + offsetX;
    			})
    			.attr("y", function(d){
    				return svgHeight - d - offsetY;
    			})

// draw Text
textElements = d3.select("#myGraph")
              .selectAll("#barNum")
              .data(dataSet)

	textElements.enter()
				.append("text")
				.attr("class", "barNum")
				.attr("x", function(d, i){
				return i * 30 + 10 + offsetX;
				})
				.attr("y", svgHeight - 5 - offsetY)
				.text(function(d) {
					return d;
				})
						  


				//가로방향 선을 표시
d3.select("#myGraph").append("rect")
          .attr("class","axis_x")
          .attr("width", 320)
          .attr("height", 1)
          .attr("transform", "translate("+offsetX + ", "+((svgHeight)-offsetY)+")")

xElements = d3.select("#myGraph")
            .selectAll("#barName")
            .data(dataSet)
xElements.enter()
          .append("text")
          .attr("class","barName")
          .attr("x", function(d, i){
            return i * 30 + 10 + interval + offsetX
          })
          .attr("y", svgHeight+15 -offsetY)
          .text(function(d,i){
            return ["A","B","C","D","E"][i];
          })


//        .exit()
