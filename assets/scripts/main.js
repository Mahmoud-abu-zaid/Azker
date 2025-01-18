document.getElementById("toggleMode").onclick = () => {
  document.body.classList.toggle("dark-mode");
};
document.getElementById("toggle_menu").onclick = () => {
  if (document.getElementById("menu").classList.contains("open")) {
    document.getElementById("menu").classList.remove("open");
  } else {
    document.getElementById("menu").classList.add("open");
  }
};
fetch(`https://www.myjsons.com/v/b7d03829`)
  .then((response) => response.json())
  .then((data) => {
    let azkar = "";
    for (let i = 0; i < data["أذكار الصباح"].length; i++) {
      azkar += `
  <li><p><span>${data["أذكار الصباح"][i].content}</span ><span class="count">${data["أذكار الصباح"][i].count}</span></p></li>
  `;
    }
    document.getElementById("lest-azkar").innerHTML = azkar;
    ////////////////////////////////////////////////////////////////////////
    let eveningAzkar = "";
    for (let i = 0; i < data["أذكار المساء"].length; i++) {
      eveningAzkar += `
  <li><p><span>${data["أذكار المساء"][i].content}</span ><span class="count" >${data["أذكار المساء"][i].count}</span></p></li>
  `;
    }
    document.getElementById("evening-azkar").innerHTML = eveningAzkar;
    ///////////////////////////////////////////////////////////////////
    let alsalamMinAlsalaa = "";
    for (let i = 0; i < data["أذكار بعد السلام من الصلاة المفروضة"].length; i++) {
      alsalamMinAlsalaa += `
  <li><p><span>${data["أذكار بعد السلام من الصلاة المفروضة"][i].content}</span><span  class="count">${data["أذكار بعد السلام من الصلاة المفروضة"][i].count}</span></p></li>
  `;
    }
    document.getElementById("alsalamAlsalaa").innerHTML = alsalamMinAlsalaa;
    ///////////////////////////////////////////////////////////////////
    let tasabih = "";
    for (let i = 0; i < data["تسابيح"].length; i++) {
      tasabih += `
  <li><p><span>${data["تسابيح"][i].content}</span ><span  class="count">${data["تسابيح"][i].count}</span></p></li>
  `;
    }
    document.getElementById("tasabih_").innerHTML = tasabih;
    ///////////////////////////////////////////////////////////////////
    let azkerAlyawm = "";
    for (let i = 0; i < data["أذكار النوم"].length; i++) {
      azkerAlyawm += `
  <li><p> <span>${data["أذكار النوم"][i].content}</span><span  class="count">${data["أذكار النوم"][i].count}</span></p></li>
  `;
    }
    document.getElementById("azker-alyawm").innerHTML = azkerAlyawm;

     ///////////////////////////////////////////////////////////////////
     let azkerAliastiqaz = "";
     for (let i = 0; i < data["أذكار الاستيقاظ"].length; i++) {
      azkerAliastiqaz += `
   <li> <p><span>${data["أذكار الاستيقاظ"][i].content}</span ><span  class="count">${data["أذكار الاستيقاظ"][i].count}</span></p></li>
   `;
     }
     document.getElementById("azker-aliastiqaz").innerHTML = azkerAliastiqaz;
        ///////////////////////////////////////////////////////////////////
        let adeiatQurania = "";
        for (let i = 0; i < data["أدعية قرآنية"].length; i++) {
          adeiatQurania += `
      <li><p><span>${data["أدعية قرآنية"][i].content}</span ><span  class="count">${data["أدعية قرآنية"][i].count}</span></p></li>
      `;
        }
        document.getElementById("adeiatQurania").innerHTML = adeiatQurania;
     
        let adeiatAlianbia = "";
        for (let i = 0; i < data["أدعية الأنبياء"].length; i++) {
          adeiatAlianbia += `
      <li><p><span>${data["أدعية الأنبياء"][i].content}</span ><span  class="count">${data["أدعية الأنبياء"][i].count}</span></p></li>
      `;
        }
        document.getElementById("adeiatAlianbia").innerHTML = adeiatAlianbia;
  });
