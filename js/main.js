//change image on click game-1
function changeImage() {
  let displayImage = document.getElementById('image1')
  if(displayImage.src.match('images/change-photo.svg')){
    displayImage.src = 'images/game_one-1.svg'
  } else {
    displayImage.src = 'images/change-photo.svg'
  }
}  
  // change image resp
  function changeImageResp() {
    let displayImage = document.getElementById('image-resp')
    if(displayImage.src.match('images/game_one-resp-color.svg')){
      displayImage.src = 'images/game_one-resp2.svg'
    } else {
      displayImage.src = 'images/game_one-resp-color.svg'
    }
}

//сменить цвет кнопки при нажатии - game-2 
function buttonColor() {
  document.getElementById("button").style.backgroundColor = '#FD3E3E';
}
function buttonColor2() {
  document.getElementById("button2").style.backgroundColor = '#8485E8';
}
function buttonColor3() {
  document.getElementById("button3").style.backgroundColor = '#3E73FD';
}
function buttonColor4() {
  document.getElementById("button4").style.backgroundColor = '#FD3E3E';
}
function buttonColor5() {
  document.getElementById("button5").style.backgroundColor = '#FDDC3E';
}
function buttonColor6() {
  document.getElementById("button6").style.backgroundColor = '#8485E8';
}
function buttonColor7() {
  document.getElementById("button7").style.backgroundColor = '#FD3E60';
}
function buttonColor8() {
  document.getElementById("button8").style.backgroundColor = '#3E73FD';
}
function buttonColor9() {
  document.getElementById("button9").style.backgroundColor = '#8485E8';
}
function buttonColor10() {
  document.getElementById("button10").style.backgroundColor = '#FDDC3E';
}
function buttonColor11() {
  document.getElementById("button11").style.backgroundColor = '#3E73FD';
}
function buttonColor12() {
  document.getElementById("button12").style.backgroundColor = '#FD3E60';
}

// закрытие окон по клику
$(function () {
  $('#text').click(function () {
  $(this).css('display', 'none')
  })
setTimeout (function () {
  $('#text').css('display', 'block')
  }, 1500)
})

$(function () {
  $('#textone').click(function () {
  $(this).css('display', 'none')
  })
setTimeout (function () {
  $('#textone').css('display', 'block')
  }, 1400)
})

$(function () {
  $('#texttext').click(function () {
  $(this).css('display', 'none')
  })
setTimeout (function () {
  $('#texttext').css('display', 'block')
  }, 2000)
})

$(function () {
  $('#textthree').click(function () {
  $(this).css('display', 'none')
  })
setTimeout (function () {
  $('#textthree').css('display', 'block')
  }, 2500)
})

$(function () {
  $('#textfour').click(function () {
  $(this).css('display', 'none')
  })
setTimeout (function () {
  $('#textfour').css('display', 'block')
  }, 3000)
})

$(function () {
  $('#textfive').click(function () {
  $(this).css('display', 'none')
  })
setTimeout (function () {
  $('#textfive').css('display', 'block')
  }, 3500)
})

$(function () {
  $('#textsix').click(function () {
  $(this).css('display', 'none')
  })
setTimeout (function () {
  $('#textsix').css('display', 'block')
  }, 4000)
})

// шарики меняют цвет по клику
function elColor() {
  document.getElementById("el").style.backgroundColor = '#84D0E8';
}
function elColor2() {
  document.getElementById("el2").style.backgroundColor = '#FD3E60';
}
function elColor3() {
  document.getElementById("el3").style.backgroundColor = '#FDDC3E';
}
function elColor4() {
  document.getElementById("el4").style.backgroundColor = '#84D0E8';
}
function elColor5() {
  document.getElementById("el5").style.backgroundColor = '#84D0E8';
}
function elColor6() {
  document.getElementById("el6").style.backgroundColor = '#8485E8';
}
function elColor7() {
  document.getElementById("el7").style.backgroundColor = '#FD3E60';
}
function elColor8() {
  document.getElementById("el8").style.backgroundColor = '#FDDC3E';
}
function elColor9() {
  document.getElementById("el9").style.backgroundColor = '#84D0E8';
}
function elColor10() {
  document.getElementById("el10").style.backgroundColor = '#8485E8';
}
function elColor13() {
  document.getElementById("el13").style.backgroundColor = '#84D0E8';
}
function elColor18() {
  document.getElementById("el18").style.backgroundColor = '#FD3E60';
}

// сбор мышей в клетки
$( function() {
  $( "#draggable" ).draggable();
} );

$( function() {
  $( "#draggabletwo" ).draggable();
} );

$( function() {
  $( "#draggablethree " ).draggable();
} );

$( function() {
  $( "#draggablefour" ).draggable();
} );




