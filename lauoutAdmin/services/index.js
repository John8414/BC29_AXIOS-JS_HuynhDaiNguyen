function Services() {
   this.getListOurTeachApi = function () {
      return axios({
         url: "https://628b99597886bbbb37bbca02.mockapi.io/api/ourTeach",
         method: "GET",
      })
   }

   this.deleteOurTeachApi = function (id) {
      return axios({
         url: `https://628b99597886bbbb37bbca02.mockapi.io/api/ourTeach/${id}`,
         method: "DELETE",
      })
   }

   this.addOurTeachApi = function (ourTeach) {
      return axios({
         url: "https://628b99597886bbbb37bbca02.mockapi.io/api/ourTeach",
         method: "POST",
         data: ourTeach,
      })
   }

   this.getOurTeachById = function (id) {
      return axios({
         url: `https://628b99597886bbbb37bbca02.mockapi.io/api/ourTeach/${id}`,
         method: "GET",
      })
   }

   this.updateOurTeachApi = function (ourTeach) {
      return axios({
         url: `https://628b99597886bbbb37bbca02.mockapi.io/api/ourTeach/${ourTeach.id}`,
         method: "PUT",
         data: ourTeach,
      })
   }
}