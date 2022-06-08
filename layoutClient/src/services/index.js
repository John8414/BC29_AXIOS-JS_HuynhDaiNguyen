function Services() {
   this.arr = [];

   this.getListOurTeamApi = function () {
      return axios({
         url: "https://628b995c667aea3a3e32d14e.mockapi.io/api/ourTeam",
         method: "GET",
      });

   };
}