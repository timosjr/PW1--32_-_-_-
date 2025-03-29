function calculate_1() {
  // Отримання значень від користувача
  var hp = document.getElementById("hp").value;
  var cp = document.getElementById("cp").value;
  var sp = document.getElementById("sp").value;
  var np = document.getElementById("np").value;
  var op = document.getElementById("op").value;
  var wp = document.getElementById("wp").value;
  var ap = document.getElementById("ap").value;

  // Розрахунок коефіцієнтів
  var krs = 100 / (100 - wp);
  var krg = 100 / (100 - wp - ap);

  // Розрахунок складу сухої маси палива
  var hs = hp * krs;
  var cs = cp * krs;
  var ss = sp * krs;
  var ns = np * krs;
  var os = op * krs;
  var as = ap * krs;

  // Розрахунок складу горючої маси палива
  var hg = hp * krg;
  var cg = cp * krg;
  var sg = sp * krg;
  var ng = np * krg;
  var og = op * krg;

  // Розрахунок нижчої теплоти згоряння для робочої маси
  var qrn = (339 * cp + 1030 * hp - 108.8 * (op - sp) - 25 * wp) / 1000;
  var qf = qrn;
  var qrg = (qrn + 0.025 * wp) * (100/( 100- wp - ap));

  // Розрахунок нижчої теплоти згоряння для сухої маси
  var qd = (qf + 0.025 * wp) *(100 /(100- wp));

  // Виведення результатів
  document.getElementById("result").innerHTML = "Результат: <br> Коефіцієнт переходу від робочої до сухої маси = " + krs.toFixed(2)  +
      "<br> Коефіцієнт переходу від робочої до горючої маси = " + krg.toFixed(2)  +
      "<br> Склад сухої маси палива становитиме: Hc= " + hs.toFixed(2) + "%; Cc=" + cs.toFixed(2) + "%; Sс=" + ss.toFixed(2) +"%; Nс=" + ns.toFixed(2) +"%; Oс=" + os.toFixed(2) + "%; Aс=" + as.toFixed(2) + "%;" +
      "<br> Склад горючої маси палива становитиме: Hc= " + hg.toFixed(2) + "%; Cг=" + cg.toFixed(2) + "%; Sг=" + sg.toFixed(2) + "%; Nг=" + ng.toFixed(2) + "%; Oг=" + og.toFixed(2) + "%;" +
      "<br> Нижча теплота згоряння для робочої маси за заданим складом компонентів палива становить: " + qrn.toFixed(4) + "МДж/кг" +
      "<br> Нижча теплота згоряння для сухої маси за заданим складом компонентів палива становить:" + qd.toFixed(2)  + "МДж/кг" +
      "<br> Нижча теплота згоряння для горючої маси за заданим складом компонентів палива становить:" + qrg.toFixed(1) + "МДж/кг";
}

function calculate_2() {
  // Отримання значень від користувача
  var cf = document.getElementById("cf").value;
  var hf = document.getElementById("hf").value;
  var of = document.getElementById("of").value;
  var sf = document.getElementById("sf").value;
  var x1 = document.getElementById("x1").value; // нижча теплота згоряння горючої маси мазуту
  var x2 = document.getElementById("x2").value; // вологість робочої маси палива
  var x3 = document.getElementById("x3").value; // зольність сухої маси
  var v = document.getElementById("v").value;

  // Розрахунок коефіцієнтів
  var kgr = (100 - x2 - x3) / 100;
  var kgs = (100 - x2) / 100;

  // Розрахунок складу робочої маси мазуту
  cf2 = cf * kgr;
  hf2 = hf * kgr;
  of2 = of * kgr;
  sf2 = sf * kgr;
  x32 = x3 * kgs;
  v2 = v * kgs;

  // Розрахунок нижчої теплоти згоряння мазуту на робочу масу
  Q = x1 * ((100 - x2 - x32) / 100) - 0.025 * x2;

  // Виведення результатів
  document.getElementById("result2").innerHTML = "Результат: <br> Склад робочої маси мазуту становитиме: Cр= " + cf2.toFixed(2) +"%; Hр=" + hf2.toFixed(2) + "%; Sр=" + sf2.toFixed(2) + "%; Oр=" + of2.toFixed(2) + "%; Vр=" + v2.toFixed(2) + "мг/кг; Aр=" + x32.toFixed(2) +"%;" +
      "<br> Нижча теплота згоряння мазуту на робочу масу для робочої маси за заданим складом компонентів палива становить:" + Q.toFixed(2)+"МДж/кг";
}
