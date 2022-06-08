var service = new Services();

function getID(id) {
   return document.getElementById(id);
}

function getListOurTeams() {
   // lấy danh sách GV từ sever
   //pending
   getID("loader").style.display = "block";
   var promise = service.getListOurTeamApi();
   promise
      .then(function (result) {
         getID("loader").style.display = "none";
         renderListOurTeams(result.data);
      })
      .catch(function (error) {
         console.log(error);
      });
}

getListOurTeams();

function renderListOurTeams(data) {
   var contentHTML = "";
   data.forEach(function (ourTeach) {
      contentHTML += `
      <div class="team__item">
          <div class="team__item-content">
            <div class="team__item-img">
              <img src="./assets/img/${ourTeach.hinhAnh}.jpg" alt="picture of teacher" >
          </div>
          <div class="team__item-info">
          <p class="team__item-country">${ourTeach.ngonNgu}</p>
          <p class="team__item-name">${ourTeach.hoTen}</p>
          <p class="team__item-description">
           ${ourTeach.moTa}
          </p>
        </div>
        </div>
      </div> 
      `;
   });

   getID("listOurTeams").innerHTML = contentHTML;
}