document.getElementById("calculateBtn").addEventListener("click", function () {
    let basePrice = 100;
  
    const education = parseFloat(document.getElementById("education").value);
    const networth = parseFloat(document.getElementById("networth").value);
    const caste = parseFloat(document.getElementById("caste").value);
  
    const skills = document.querySelectorAll(".skill:checked");
    let skillBonus = 0;
    skills.forEach(skill => skillBonus += parseFloat(skill.value));
  
    const age = parseFloat(document.querySelector('input[name="age"]:checked').value);
  
    const reps = document.querySelectorAll(".rep:checked");
    let repCoefficient = 1;
    let repPenalty = 0;
    reps.forEach(rep => {
      let val = parseFloat(rep.value);
      if (val < 1) repCoefficient *= val;
      else repPenalty += val;
    });
  
    let total = basePrice * education * networth * age;
    total += caste + skillBonus;
    total *= repCoefficient;
    total += repPenalty;
  
    document.getElementById("finalPrice").textContent = `Final Price: $${total.toFixed(2)}`;
  });
  