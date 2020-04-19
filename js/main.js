'use strict';

{
  
  function attack() {
    return Math.floor(Math.random() * 100);
  }
  
  // バトルを開始する
  document.getElementById('battle').addEventListener('click', () => {

    attack();
    
    // 自分の攻撃力をランダムで決める
    let mine = document.getElementById('mine-attack');
    let myattack = attack();
    mine.innerHTML = myattack;
  
  
    // 相手の攻撃力をランダムで決める
    let cup = document.getElementById('cup-attack');
    let cupattack = attack();
    cup.innerHTML = cupattack;

    // 結果を表示する
    function result () {
      if (myattack > cupattack) {
        alert('あなたの勝ちです!');
      } else {
        alert('あなたの負けです!');
      }
    }
    setTimeout(result, 1000);
  })
  

}