$(document).ready(function(){
    function setColor() {
      const colors = ['#9f64e1', '#ee6c50', '#cabb67', '#5abd64', '#43bbde', '#ed7aeb', '#bd5a65']
      const max = colors.length
      const newColor = colors[Math.floor(Math.random() * max)]
      $('body, button').css('backgroundColor', newColor)
      $('#quote, #author').css('color', newColor)
    }
    
    function getNewQuote() {
      $.ajax({
        method: 'GET',
        url: 'https://quoteslate.vercel.app/api/quotes/random',
        success: function(data) {
          $('#text').html(data['quote'])
          $('#author').html(data['author'])
        }
      })
      setTimeout(() => {
        $('#quote, #author').animate({'opacity': 1}, 400)
      }, 400)
      }
    
    setColor()
    getNewQuote()
    
    $('#new-quote').click(function(){
      $('#quote, #author').animate({'opacity': 0}, 400)
      setTimeout(() => {
        setColor()
        getNewQuote()
      }, 300)
    })
  })