function Services() {
   this.getListOurTeachApi = function () {
      return axios({
         url: "https://628b995c667aea3a3e32d14e.mockapi.io/api/ourTeam",
         method: "GET",
      });
   };

   this.deleteOurTeachApi = function (id) {
      return axios({
         url: `https://628b995c667aea3a3e32d14e.mockapi.io/api/ourTeam/${id}`,
         method: "DELETE",
      });
   };

   this.addOurTeachApi = function (ourTeach) {
      return axios({
         url: "https://628b995c667aea3a3e32d14e.mockapi.io/api/ourTeam",
         method: "POST",
         data: ourTeach,
      });
   };

   this.getOurTeachById = function (id) {
      return axios({
         url: `https://628b995c667aea3a3e32d14e.mockapi.io/api/ourTeam/${id}`,
         method: "GET",
      });
   };

   this.updateOurTeachApi = function (ourTeach) {
      return axios({
         url: `https://628b995c667aea3a3e32d14e.mockapi.io/api/ourTeam/${ourTeach.id}`,
         method: "PUT",
         data: ourTeach,
      });
   };
}