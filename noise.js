$(document).ready( function() {

  var buttons = $('.instrument').children('button.note')

  var play_audio = function (event) {
    var button = $(event.target)
    var audio

    if (button.hasClass('c') || event.which === 99) {
      audio = $('#cAudio')[0]
      audio.load()
      audio.play()
    } else if (button.hasClass('d') || event.which === 100) {
      audio = $('#dAudio')[0]
      audio.load()
      audio.play()
    } else if (button.hasClass('e') || event.which === 101) {
      audio = $('#eAudio')[0]
      audio.load()
      audio.play()
    } else if (button.hasClass('f') || event.which === 102) {
      audio = $('#fAudio')[0]
      audio.load()
      audio.play()
    } else if (button.hasClass('g') || event.which === 103) {
      audio = $('#gAudio')[0]
      audio.load()
      audio.play()
    } else if (button.hasClass('a') || event.which === 97) {
      audio = $('#aAudio')[0]
      audio.load()
      audio.play()
    } else if (button.hasClass('b') || event.which === 98) {
      audio = $('#bAudio')[0]
      audio.load()
      audio.play()
    }
  }

  buttons.on('click', play_audio)
  $(document).keypress(play_audio)

});
