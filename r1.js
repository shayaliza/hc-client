



      http://localhost:5000/api/doctors/${hospitalName}












      const handleViewDoctors = () => {
        const apiUrl = `http://localhost:5000/api/doctors/${hospitalName}`;
        console.log("API URL:", apiUrl);
      
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            setDoctors(data);
            setShowDoctors(true); // Show the list of doctors
          });
      };
      

    

