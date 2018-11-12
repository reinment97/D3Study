var svgHeight =235
var barElements;
var dataSet = [120, 70, 175, 80, 220];


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
    				return i * 30;
    			})
    			.attr("y", function(d){
    				return svgHeight - d;
    			})

//        .exit()
textElements = d3.select("#myGraph")
              .selectAll("#barNum")
              .data(dataSet)

   




//        .exit()
