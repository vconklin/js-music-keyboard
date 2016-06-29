$(document).ready( function() {

  var buttons = $('.instrument').children('button.note')

  // var note_reference = {
  //   'c': 'cAudio',
  //   'd': 'dAudio',
  //   'e': 'eAudio',
  //   'f': 'fAudio',
  //   'g': 'gAudio',
  //   'a': 'aAudio',
  //   'b': 'bAudio'
  // }

  // for (var button of buttons) {
  //   audio_id = button.attr["class"] + "Audio"
  //   console.log(audio_id)
  // }


  //step 2: listen for events on those elements (click)
  buttons.on('click', function (event) {
    //play respective note
    var button = $(this)

    if (button.hasClass('c')) {
      $('#cAudio')[0].play()
    } else if (button.hasClass('d')) {
      $('#dAudio')[0].play()
    } else if (button.hasClass('e')) {
      $('#eAudio')[0].play()
    } else if (button.hasClass('f')) {
      $('#fAudio')[0].play()
    } else if (button.hasClass('g')) {
      $('#gAudio')[0].play()
    } else if (button.hasClass('a')) {
      $('#aAudio')[0].play()
    } else if (button.hasClass('b')) {
      $('#bAudio')[0].play()
    }

  })

  $(document).keypress(function (event) {

    if (event.which === 99) {
      $('#cAudio')[0].play()
    } else if (event.which === 100) {
      $('#dAudio')[0].play()
    } else if (event.which === 101) {
      $('#eAudio')[0].play()
    } else if (event.which === 102) {
      $('#fAudio')[0].play()
    } else if (event.which === 103) {
      $('#gAudio')[0].play()
    } else if (event.which === 97) {
      $('#aAudio')[0].play()
    } else if (event.which === 98) {
      $('#bAudio')[0].play()
    }

  })
});
