
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('userpost').del()
    .then(function () {
      // Inserts seed entries
      return knex('userpost').insert([
        {lat: 35.65535, 
         lng: 139.736869, 
         name: "Miya", 
         email: "miya9173@gmail.com", 
         give: "hair dryer" ,
         want:"hair iron" },
         {lat: 35.6993854,
          lng: 139.7652479,
          name: "Kimura", 
          email: "kimura1978@gmail.com", 
          give: "guitar" ,
          want:"speaker" },
      ]);
    });
};

