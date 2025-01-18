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
  <li><span>${data["أذكار الصباح"][i].content}</span class="count"><span>${data["أذكار الصباح"][i].count}</span></li>
  `;
    }
    document.getElementById("lest-azkar").innerHTML = azkar;
    ////////////////////////////////////////////////////////////////////////
    let eveningAzkar = "";
    for (let i = 0; i < data["أذكار المساء"].length; i++) {
      eveningAzkar += `
  <li><span>${data["أذكار المساء"][i].content}</span class="count"><span>${data["أذكار المساء"][i].count}</span></li>
  `;
    }
    document.getElementById("evening-azkar").innerHTML = eveningAzkar;
    ///////////////////////////////////////////////////////////////////
    let alsalamMinAlsalaa = "";
    for (let i = 0; i < data["أذكار بعد السلام من الصلاة المفروضة"].length; i++) {
      alsalamMinAlsalaa += `
  <li><span>${data["أذكار بعد السلام من الصلاة المفروضة"][i].content}</span class="count"><span>${data["أذكار بعد السلام من الصلاة المفروضة"][i].count}</span></li>
  `;
    }
    document.getElementById("alsalamAlsalaa").innerHTML = alsalamMinAlsalaa;
    ///////////////////////////////////////////////////////////////////
    let tasabih = "";
    for (let i = 0; i < data["تسابيح"].length; i++) {
      tasabih += `
  <li><span>${data["تسابيح"][i].content}</span class="count"><span>${data["تسابيح"][i].count}</span></li>
  `;
    }
    document.getElementById("tasabih_").innerHTML = tasabih;
    ///////////////////////////////////////////////////////////////////
    let azkerAlyawm = "";
    for (let i = 0; i < data["أذكار النوم"].length; i++) {
      azkerAlyawm += `
  <li><span>${data["أذكار النوم"][i].content}</span class="count"><span>${data["أذكار النوم"][i].count}</span></li>
  `;
    }
    document.getElementById("azker-alyawm").innerHTML = azkerAlyawm;

     ///////////////////////////////////////////////////////////////////
     let azkerAliastiqaz = "";
     for (let i = 0; i < data["أذكار الاستيقاظ"].length; i++) {
      azkerAliastiqaz += `
   <li><span>${data["أذكار الاستيقاظ"][i].content}</span class="count"><span>${data["أذكار الاستيقاظ"][i].count}</span></li>
   `;
     }
     document.getElementById("azker-aliastiqaz").innerHTML = azkerAliastiqaz;
        ///////////////////////////////////////////////////////////////////
        let adeiatQurania = "";
        for (let i = 0; i < data["أدعية قرآنية"].length; i++) {
          adeiatQurania += `
      <li><span>${data["أدعية قرآنية"][i].content}</span class="count"><span>${data["أدعية قرآنية"][i].count}</span></li>
      `;
        }
        document.getElementById("adeiatQurania").innerHTML = adeiatQurania;
     
        let adeiatAlianbia = "";
        for (let i = 0; i < data["أدعية الأنبياء"].length; i++) {
          adeiatAlianbia += `
      <li><span>${data["أدعية الأنبياء"][i].content}</span class="count"><span>${data["أدعية الأنبياء"][i].count}</span></li>
      `;
        }
        document.getElementById("adeiatAlianbia").innerHTML = adeiatAlianbia;
  });
