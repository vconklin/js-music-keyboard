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
    var audio

    if (button.hasClass('c')) {
      audio = $('#cAudio')[0]
      audio.load()
      audio.play()
    } else if (button.hasClass('d')) {
      audio = $('#dAudio')[0]
      audio.load()
      audio.play()
    } else if (button.hasClass('e')) {
      audio = $('#eAudio')[0]
      audio.load()
      audio.play()
    } else if (button.hasClass('f')) {
      audio = $('#fAudio')[0]
      audio.load()
      audio.play()
    } else if (button.hasClass('g')) {
      audio = $('#gAudio')[0]
      audio.load()
      audio.play()
    } else if (button.hasClass('a')) {
      audio = $('#aAudio')[0]
      audio.load()
      audio.play()
    } else if (button.hasClass('b')) {
      audio = $('#bAudio')[0]
      audio.load()
      audio.play()
    }

  })

  $(document).keypress(function (event) {
    var audio

    if (event.which === 99) {
      audio = $('#cAudio')[0]
      audio.load()
      audio.play()
    } else if (event.which === 100) {
      audio = $('#dAudio')[0]
      audio.load()
      audio.play()
    } else if (event.which === 101) {
      audio = $('#eAudio')[0]
      audio.load()
      audio.play()
    } else if (event.which === 102) {
      audio = $('#fAudio')[0]
      audio.load()
      audio.play()
    } else if (event.which === 103) {
      audio = $('#gAudio')[0]
      audio.load()
      audio.play()
    } else if (event.which === 97) {
      audio = $('#aAudio')[0]
      audio.load()
      audio.play()
    } else if (event.which === 98) {
      audio = $('#bAudio')[0]
      audio.load()
      audio.play()
    }

  })
});
