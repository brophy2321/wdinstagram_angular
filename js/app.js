

let wdinstagramData = [
  {photo_url: 'http://images.footballfanatics.com/AppLogos/NFL/NFL_Pittsburgh_Steelers_200x200_trans.png', author: 'Ryan ', body: '6X Superbowl Champs '},
  {photo_url: 'https://pbs.twimg.com/profile_images/779056518616473600/9nGIAN9D.jpg', author: 'Ryan', body: '4x Stanley Cup Champs'},
  {photo_url: ' http://a.fssta.com/content/dam/fsdigital/fscom/global/dev/static_resources/mlb/teams/retina/23.vresize.200.200.medium.0.png', author: 'Ryan', body: '5x World Series Champs'},
  {photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Pitt_Panthers_wordmark.svg/200px-Pitt_Panthers_wordmark.svg.png', author: 'Ryan', body: '9 national titles'}
]


  angular
    .module("wdinstagramApp", [])
  .controller("wdinstagramCtrl", [ wdinstagramController])


function wdinstagramController(){
  this.wdinstagram = wdinstagramData
  this.newWdinstagram = {}
    this.addWdinstagram= function () {
      this.wdinstagram.push(this.newWdinstagram)
      this.newWdinstagram = {}
    }
}
