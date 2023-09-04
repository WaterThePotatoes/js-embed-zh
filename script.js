document.addEventListener("DOMContentLoaded", function () {

    /** @returns boolean */
    function hasSpouse() {
        let yesSpouse = document.getElementById("yes-spouse")
        let noSpouse = document.getElementById("no-spouse")
        
        return yesSpouse.checked && !noSpouse.checked
    }

    /**
     * @param {boolean} hasSpouse
     * @param {number} CLB
     */
    function getPointsForCLB(hasSpouse, CLB) {
        if (hasSpouse) {
            if (CLB < 4) {
                points = 0
            } else if (CLB == 4 || CLB == 5) {
                points = 6
            } else if (CLB == 6) {
                points = 8
            } else if (CLB == 7) {
                points = 16
            } else if (CLB == 8) {
                points = 22
            } else if (CLB == 9) {
                points = 29
            } else if (CLB >= 10) {
                points = 32
            } else {
                points = 0
            }
        } else {
            if (CLB < 4) {
                points = 0
            } else if (CLB == 4 || CLB == 5) {
                points = 6
            } else if (CLB == 6) {
                points = 9
            } else if (CLB == 7) {
                points = 17
            } else if (CLB == 8) {
                points = 23
            } else if (CLB == 9) {
                points = 31
            } else if (CLB >= 10) {
                points = 34
            } else {
                points = 0
            }
        }

        return points
    }

    /**
     * @param {boolean} hasSpouse
     * @param {number} CLB
     */
    function getPointsForCLB_Second(hasSpouse, CLB) {
        if (hasSpouse) {
            if (CLB <= 4) {
                points = 0
            } else if (CLB == 5 || CLB == 6) {
                points = 1
            } else if (CLB == 7 || CLB == 8) {
                points = 3
            } else if (CLB >= 9) {
                points = 6
            } else {
                points = 0
            }
        } else {
            if (CLB <= 4) {
                points = 0
            } else if (CLB == 5 || CLB == 6) {
                points = 1
            } else if (CLB == 7 || CLB == 8) {
                points = 3
            } else if (CLB >= 9) {
                points = 6
            } else {
                points = 0
            }
        }

        return points
    }


    /**
     * @param {boolean} hasSpouse
     * @param {number} age
     */
    function getPointsForAge(hasSpouse, age) {
        if (hasSpouse) {
            if (age <= 17 || age >= 45) {
                return 0
            } else if (age == 18) {
                return 90
            } else if (age == 19) {
                return 95
            } else if (20 <= age && age <= 29) {
                return 100
            } else if (30 <= age && age <= 40) {
                return 95 - ((age - 30) * 5)
            } else if (41 <= age && age <= 44) {
                return 35 - ((age - 41) * 10)
            }
        } else {
            if (age <= 17 || age >= 45) {
                return 0
            } else if (age == 18) {
                return 99
            } else if (age == 19) {
                return 105
            } else if (20 <= age && age <= 29) {
                return 110
            } else if (30 <= age && age <= 40) {
                return Math.ceil(110 - ((age - 29) * 5.5))
            } else if (41 <= age && age <= 44) {
                return 39 - ((age - 41) * 11)
            }
        }
    }


    /**
     * @param {boolean} hasSpouse
     * @param {string} educationLevel
     */
    function getPointsForEducation(hasSpouse, educationLevel) {
        let points = 0
        
        if (hasSpouse) {
            switch (educationLevel) {
                case "under_ss":
                    points = 0
                    break
                case "ss":
                    points = 28
                    break
                case "one_year":
                    points = 84
                    break
                case "two_year":
                    points = 91
                    break
                case "three_year":
                    points = 112
                    break
                case "extra":
                    points = 119
                    break
                case "masters":
                    points = 126
                    break
                case "phd":
                    points = 140
                    break
                default:
                    points = 0
            }
        } else {
            switch (educationLevel) {
                case "under_ss":
                    points = 0
                    break
                case "ss":
                    points = 30
                    break
                case "one_year":
                    points = 90
                    break
                case "two_year":
                    points = 98
                    break
                case "three_year":
                    points = 120
                    break
                case "extra":
                    points = 128
                    break
                case "masters":
                    points = 135
                    break
                case "phd":
                    points = 150
                    break
                default:
                    points = 0
            }
        }

        return points
    }


    /**
     * @param {boolean} hasSpouse
     */
    function getPointsForEducationSpouse(educationLevel) {
        let points = 0
        
        switch (educationLevel) {
            case "under_ss":
                points = 0
                break
            case "ss":
                points = 2
                break
            case "one_year":
                points = 6
                break
            case "two_year":
                points = 7
                break
            case "three_year":
                points = 8
                break
            case "extra":
                points = 9
                break
            case "masters":
                points = 10
                break
            case "phd":
                points = 10
                break
            default:
                points = 0
        }

        return points
    }


    /**
     * @param {number} CLB
     */
    function getPointsForCLBSpouse(CLB) {
        if (CLB <= 4) {
            return 0
        } else if (CLB == 5 || CLB == 6) {
            return 1
        } else if (CLB == 7 || CLB == 8) {
            return 3
        } else if (CLB >= 9) {
            return 5
        } else {
            return 0
        }
    }

    
    /**
     * @param {number} workCanada 
     */
    function getPointsForWorkCanadaSpouse(workCanada) {
        if (workCanada <= 1) {
            return 0
        } else if (workCanada == 1) {
            return 5
        } else if (workCanada == 2) {
            return 7
        } else if (workCanada == 3) {
            return 8
        } else if (workCanada == 4) {
            return 9
        } else if (workCanada >= 5) {
            return 10
        } else {
            return 0
        }
    }


    /**
     * 
     * @param {string} abilityType 
     * @param {number} score 
     */
    function ieltsToCLB(abilityType, score) {
        if (abilityType == "reading") {
            if (score >= 8) {
                return 10;
            } else if (score >= 7) {
                return 9;
            } else if (score >= 6.5) {
                return 8;
            } else if (score >= 6) {
                return 7;
            } else if (score >= 5) {
                return 6;
            } else if (score >= 4) {
                return 5;
            } else if (score >= 3.5) {
                return 4;
            } else {
                return 0;
            }
        } else if (abilityType == "writing" || abilityType == "speaking") {
            if (score >= 7.5) {
                return 10;
            } else if (score >= 7) {
                return 9;
            } else if (score >= 6.5) {
                return 8;
            } else if (score >= 6) {
                return 7;
            } else if (score >= 5.5) {
                return 6;
            } else if (score >= 5) {
                return 5;
            } else if (score >= 4) {
                return 4;
            } else {
                return 0;
            }
        } else if (abilityType == "listening") {
            if (score >= 8.5) {
                return 10;
            } else if (score >= 8) {
                return 9;
            } else if (score >= 7.5) {
                return 8;
            } else if (score >= 7) {
                return 7;
            } else if (score >= 6) {
                return 6;
            } else if (score >= 5.5) {
                return 5;
            } else if (score >= 5) {
                return 4;
            } else {
                return 0;
            }
        }
    }


    /**
     * 
     * @param {string} abilityType 
     * @param {number} score 
     */
    function tefToCLB(abilityType, score) {
        if (abilityType == "reading") {
            if (score <= 150) {
                return 4
            } else if (score <= 180) {
                return 5
            } else if (score <= 206) {
                return 6
            } else if (score <= 232) {
                return 7
            } else if (score <= 247) {
                return 8
            } else if (score <= 262) {
                return 9
            } else if (score <= 300) {
                return 10
            } else {
                return 0
            }
        }
        else if (abilityType == "writing" || abilityType == "speaking") {
            if (score <= 225) {
                return 4
            } else if (score <= 270) {
                return 5
            } else if (score <= 309) {
                return 6
            } else if (score <= 348) {
                return 7
            } else if (score <= 370) {
                return 8
            } else if (score <= 392) {
                return 9
            } else if (score <= 450) {
                return 10
            } else {
                return 0
            }
        } else if (abilityType == "listening") {
            if (score <= 180) {
                return 4
            } else if (score <= 216) {
                return 5
            } else if (score <= 248) {
                return 6
            } else if (score <= 279) {
                return 7
            } else if (score <= 297) {
                return 8
            } else if (score <= 315) {
                return 9
            } else if (score <= 360) {
                return 10
            } else {
                return 0
            }
        }
    }


/**
 * 
 * @param {string} abilityType 
 * @param {number} score 
 */
    function tcfToCLB(abilityType, score) {
        if (abilityType == "reading") {
            if (score <= 374) {
                return 4
            } else if (score <= 405) {
                return 5
            } else if (score <= 452) {
                return 6
            } else if (score <= 498) {
                return 7
            } else if (score <= 523) {
                return 8
            } else if (score <= 548) {
                return 9
            } else if (score <= 699) {
                return 10
            } else {
                return 0
            }
        }
        else if (abilityType == "writing" || abilityType == "speaking") {
            if (score <= 5) {
                return 4
            } else if (score <= 6) {
                return 5
            } else if (score <= 9) {
                return 6
            } else if (score <= 11) {
                return 7
            } else if (score <= 13) {
                return 8
            } else if (score <= 15) {
                return 9
            } else if (score <= 20) {
                return 10
            } else {
                return 0
            }
        } else if (abilityType == "listening") {
            if (score <= 368) {
                return 4
            } else if (score <= 397) {
                return 5
            } else if (score <= 457) {
                return 6
            } else if (score <= 502) {
                return 7
            } else if (score <= 522) {
                return 8
            } else if (score <= 548) {
                return 9
            } else if (score <= 699) {
                return 10
            } else {
                return 0
            }
        }
    }


/**
 * 
 * @param {string} abilityType 
 * @param {number} score 
 * @returns 
 */
    function celpipToCLB(abilityType, score) {
        return score
    }


    /**
     * @param {boolean} hasSpouse
     * @param {number} work
     */
    function getPointsForWorkCanada(hasSpouse, workCanada) {
        if (hasSpouse) {
            if (workCanada <= 1) {
                points = 0
            } else if (workCanada == 1) {
                points = 35
            } else if (workCanada == 2) {
                points = 46
            } else if (workCanada == 3) {
                points = 56
            } else if (workCanada == 4) {
                points = 63
            } else if (workCanada >= 5) {
                points = 70
            } else {
                points = 0
            }
        } else {
            if (workCanada <= 1) {
                points = 0
            } else if (workCanada == 1) {
                points = 40
            } else if (workCanada == 2) {
                points = 53
            } else if (workCanada == 3) {
                points = 64
            } else if (workCanada == 4) {
                points = 72
            } else if (workCanada >= 5) {
                points = 80
            } else {
                points = 0
            }
        }

        return points
    }


    /**
     * 
     * @param {number} workCanada 
     * @param {number} workForeign 
     * @param {string} certificateOfQualification 
     * @param {number} readingCLB 
     * @param {number} writingCLB 
     * @param {number} listeningCLB 
     * @param {number} speakingCLB 
     * @param {string} educationLevel 
     */
    function getPointsForSkillTransferability(workCanada, workForeign, certificateOfQualification, readingCLB, writingCLB, listeningCLB, speakingCLB, educationLevel) {
        totalPoints = 0;

        console.log(Math.min(readingCLB, writingCLB, listeningCLB, speakingCLB))

        if (Math.min(readingCLB, writingCLB, listeningCLB, speakingCLB) >= 7) {
            if (Math.min(readingCLB, writingCLB, listeningCLB, speakingCLB) < 9) {
                if (educationLevel == "under_ss" || educationLevel == "ss") {
                    totalPoints += 0;
                } else if (educationLevel == "one_year" || educationLevel == "two_year") {
                    totalPoints += 13;
                } else if (educationLevel == "three_year" || educationLevel == "masters") {
                    totalPoints += 25
                } else if (educationLevel == "phd") {
                    totalPoints += 25;
                }
            } else {
                if (educationLevel == "under_ss" || educationLevel == "ss") {
                    totalPoints += 0;
                } else if (educationLevel == "one_year" || educationLevel == "two_year") {
                    totalPoints += 25;
                } else if (educationLevel == "three_year" || educationLevel == "masters" || educationLevel == "phd") {
                    totalPoints += 50
                }
            }
        }

        if (workCanada >= 1) {
            if (workCanada == 1) {
                if (educationLevel == "under_ss" || educationLevel == "ss") {
                    totalPoints += 0;
                } else if (educationLevel == "one_year" || educationLevel == "two_year") {
                    totalPoints += 13;
                } else if (educationLevel == "three_year" || educationLevel == "masters") {
                    totalPoints += 25
                } else if (educationLevel == "phd") {
                    totalPoints += 25;
                }
            } else {
                if (educationLevel == "under_ss" || educationLevel == "ss") {
                    totalPoints += 0;
                } else if (educationLevel == "one_year" || educationLevel == "two_year") {
                    totalPoints += 25;
                } else if (educationLevel == "three_year" || educationLevel == "masters" || educationLevel == "phd") {
                    totalPoints += 50
                }
            }
        }

        if (Math.min(readingCLB, writingCLB, listeningCLB, speakingCLB) >= 7) {
            if (Math.min(readingCLB, writingCLB, listeningCLB, speakingCLB) < 9) {
                if (workForeign == 0) {
                    totalPoints += 0;
                } else if (workForeign < 3 && workForeign > 0) {
                    totalPoints += 13;
                } else if (workForeign >= 3) {
                    totalPoints += 25;
                }
            } else {
                if (workForeign == 0) {
                    totalPoints += 0;
                } else if (workForeign < 3 && workForeign > 0) {
                    totalPoints += 25;
                } else if (workForeign >= 3) {
                    totalPoints += 50;
                }
            }
        }


        if (workCanada >= 1) {
            if (workCanada == 1) {
                    if (workForeign == 0) {
                        totalPoints += 0;
                    } else if (workForeign < 3 && workForeign > 0) {
                        totalPoints += 13;
                    } else if (workForeign >= 3) {
                        totalPoints += 25;
                    }
            } else {
                if (workForeign == 0) {
                    totalPoints += 0;
                } else if (workForeign < 3 && workForeign > 0) {
                    totalPoints += 25;
                } else if (workForeign >= 3) {
                    totalPoints += 50;
                }
            }
        }

        if (Math.min(readingCLB, writingCLB, listeningCLB, speakingCLB) >= 5) {
            console.log("test")
            if (Math.min(readingCLB, writingCLB, listeningCLB, speakingCLB) < 7) {
                console.log("test_two")
                if (certificateOfQualification == "yes") {
                    totalPoints += 25;
                }
            } else {
                if (certificateOfQualification == "yes") {
                    totalPoints += 50;
                }
            }
        }


        return Math.min(totalPoints, 100)


    }


    /**
     * No parameters - grabs directly from index.html
     */
    function getAdditionalPoints() {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        var totalPoints = 0;

        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                totalPoints += parseInt(checkbox.value);
            }
        });

        return Math.min(600, totalPoints)
    }


    function main() {
        let age = document.getElementById("age");
        let result = document.getElementById("result");
        let workCanada = document.getElementById("workCanada");
        let workForeign = document.getElementById("workForeign");
        let spouse_workCanada = document.getElementById("spouse_workCanada")
        let spouseFactors = document.getElementById("spouseFactors");
        let certificateOfQualification = document.querySelector('input[name="CoQ"]:checked');
        spouseFactors.style.display = "none";

        function updatePoints() {
            
            certificateOfQualification = document.querySelector('input[name="CoQ"]:checked') ? document.querySelector('input[name="CoQ"]:checked').value : "no";
            const inputs = document.querySelectorAll('input[type="text"]');
            const extra_inputs = document.querySelectorAll('input[name*="education"]');
            const additionalInputs = document.querySelectorAll('input[type="checkbox');
            const allEmpty = Array.from(inputs).reduce((acc, input) => acc && input.value === '', true) && Array.from(extra_inputs).reduce((acc, extra_input) => acc && !extra_input.checked, true) && Array.from(additionalInputs).reduce((acc, additional_input) => acc && !additional_input.checked, true);
            let userHasSpouse = hasSpouse();
            let agePoints = getPointsForAge(userHasSpouse, parseFloat(age.value));
            let selectedEducation = document.querySelector('input[name="education"]:checked');
            let spouse_selectedEducation = document.querySelector('input[name="spouse_education"]:checked')
            let educationLevel = selectedEducation ? selectedEducation.value : "default";
            let spouse_educationLevel = spouse_selectedEducation ? spouse_selectedEducation.value : "default";
            let educationPoints = getPointsForEducation(userHasSpouse, educationLevel);
            let spouse_educationPoints = getPointsForEducationSpouse(spouse_educationLevel);
            let spouseFactors = document.getElementById("spouseFactors");
            let workCanadaYears = isNaN(parseInt(workCanada.value)) ? 0 : parseInt(workCanada.value);
            let workForeignYears = isNaN(parseInt(workForeign.value)) ? 0 : parseInt(workForeign.value);
            let additionalPoints = getAdditionalPoints();
        
            let readingScore = parseFloat(document.getElementById("CLBr").value);
            let writingScore = parseFloat(document.getElementById("CLBw").value);
            let listeningScore = parseFloat(document.getElementById("CLBl").value);
            let speakingScore = parseFloat(document.getElementById("CLBs").value);
        
            // Get the selected CLB type (IELTS, TEF, CELPIP, TCF)
            let clbType = (document.querySelector('input[name="_CLBtype"]:checked') == null) ? "celpip" : document.querySelector('input[name="_CLBtype"]:checked').value;
        
            // Convert the scores to CLB scores using the appropriate conversion function
            let readingCLB = readingScore;
            let writingCLB = writingScore;
            let listeningCLB = listeningScore;
            let speakingCLB = speakingScore;
        
            if (clbType === "ielts") {
                readingCLB = ieltsToCLB("reading", readingScore);
                writingCLB = ieltsToCLB("writing", writingScore);
                listeningCLB = ieltsToCLB("listening", listeningScore);
                speakingCLB = ieltsToCLB("speaking", speakingScore);
            } else if (clbType === "tef") {
                readingCLB = tefToCLB("reading", readingScore);
                writingCLB = tefToCLB("writing", writingScore);
                listeningCLB = tefToCLB("listening", listeningScore);
                speakingCLB = tefToCLB("speaking", speakingScore);
            } else if (clbType === "celpip") {
                readingCLB = celpipToCLB("reading", readingScore);
                writingCLB = celpipToCLB("writing", writingScore);
                listeningCLB = celpipToCLB("listening", listeningScore);
                speakingCLB = celpipToCLB("speaking", speakingScore);
            } else if (clbType === "tcf") {
                readingCLB = tcfToCLB("reading", readingScore);
                writingCLB = tcfToCLB("writing", writingScore);
                listeningCLB = tcfToCLB("listening", listeningScore);
                speakingCLB = tcfToCLB("speaking", speakingScore);
            }
        
            // Calculate points for each CLB skill level
            let clbReadingPoints = getPointsForCLB(userHasSpouse, readingCLB);
            let clbWritingPoints = getPointsForCLB(userHasSpouse, writingCLB);
            let clbListeningPoints = getPointsForCLB(userHasSpouse, listeningCLB);
            let clbSpeakingPoints = getPointsForCLB(userHasSpouse, speakingCLB);
        

            let readingScore2 = parseFloat(document.getElementById("CLBr2").value);
            let writingScore2 = parseFloat(document.getElementById("CLBw2").value);
            let listeningScore2 = parseFloat(document.getElementById("CLBl2").value);
            let speakingScore2 = parseFloat(document.getElementById("CLBs2").value);
        
            // Get the selected CLB type (IELTS, TEF, CELPIP, TCF)
            let clbType2 = (document.querySelector('input[name="_CLBtype2"]:checked') == null) ? "celpip" : document.querySelector('input[name="_CLBtype2"]:checked').value;
        
            // Convert the scores to CLB scores using the appropriate conversion function
            let readingCLB2 = readingScore2;
            let writingCLB2 = writingScore2;
            let listeningCLB2 = listeningScore2;
            let speakingCLB2 = speakingScore2;
        
            if (clbType2 === "ielts") {
                readingCLB2 = ieltsToCLB("reading", readingScore2);
                writingCLB2 = ieltsToCLB("writing", writingScore2);
                listeningCLB2 = ieltsToCLB("listening", listeningScore2);
                speakingCLB2 = ieltsToCLB("speaking", speakingScore2);
            } else if (clbType2 === "tef") {
                readingCLB2 = tefToCLB("reading", readingScore2);
                writingCLB2 = tefToCLB("writing", writingScore2);
                listeningCLB2 = tefToCLB("listening", listeningScore2);
                speakingCLB2 = tefToCLB("speaking", speakingScore2);
            } else if (clbType2 === "celpip") {
                readingCLB2 = celpipToCLB("reading", readingScore2);
                writingCLB2 = celpipToCLB("writing", writingScore2);
                listeningCLB2 = celpipToCLB("listening", listeningScore2);
                speakingCLB2 = celpipToCLB("speaking", speakingScore2);
            } else if (clbType2 === "tcf") {
                readingCLB2 = tcfToCLB("reading", readingScore2);
                writingCLB2 = tcfToCLB("writing", writingScore2);
                listeningCLB2 = tcfToCLB("listening", listeningScore2);
                speakingCLB2 = tcfToCLB("speaking", speakingScore2);
            }
        
            // Calculate points for each CLB skill level
            let clbSecondLanguageReadingPoints = getPointsForCLB_Second(userHasSpouse, readingCLB2);
            let clbSecondLanguageWritingPoints = getPointsForCLB_Second(userHasSpouse, writingCLB2);
            let clbSecondLanguageListeningPoints = getPointsForCLB_Second(userHasSpouse, listeningCLB2);
            let clbSecondLanguageSpeakingPoints = getPointsForCLB_Second(userHasSpouse, speakingCLB2);

            // Sum up the CLB points for all skills for both languages
            let clbPoints = clbReadingPoints + clbWritingPoints + clbListeningPoints + clbSpeakingPoints;
            let clbSecondLanguagePoints = clbSecondLanguageReadingPoints + clbSecondLanguageWritingPoints + clbSecondLanguageListeningPoints + clbSecondLanguageSpeakingPoints;
            

            let spouse_readingScore = parseFloat(document.getElementById("spouse_CLBr").value);
            let spouse_writingScore = parseFloat(document.getElementById("spouse_CLBw").value);
            let spouse_listeningScore = parseFloat(document.getElementById("spouse_CLBl").value);
            let spouse_speakingScore = parseFloat(document.getElementById("spouse_CLBs").value);
        
            // Get the selected CLB type (IELTS, TEF, CELPIP, TCF)
            let spouse_clbType = (document.querySelector('input[name="spouse_CLBtype"]:checked') == null) ? "celpip" : document.querySelector('input[name="spouse_CLBtype"]:checked').value;
        
            // Convert the scores to CLB scores using the appropriate conversion function
            let spouse_readingCLB = spouse_readingScore;
            let spouse_writingCLB = spouse_writingScore;
            let spouse_listeningCLB = spouse_listeningScore;
            let spouse_speakingCLB = spouse_speakingScore;
        
            if (spouse_clbType === "ielts") {
                spouse_readingCLB = ieltsToCLB("reading", spouse_readingScore);
                spouse_writingCLB = ieltsToCLB("writing", spouse_writingScore);
                spouse_listeningCLB = ieltsToCLB("listening", spouse_listeningScore);
                spouse_speakingCLB = ieltsToCLB("speaking", spouse_speakingScore);
            } else if (spouse_clbType === "tef") {
                spouse_readingCLB = tefToCLB("reading", spouse_readingScore);
                spouse_writingCLB = tefToCLB("writing", spouse_writingScore);
                spouse_listeningCLB = tefToCLB("listening", spouse_listeningScore);
                spouse_speakingCLB = tefToCLB("speaking", spouse_speakingScore);
            } else if (spouse_clbType === "celpip") {
                spouse_readingCLB = celpipToCLB("reading", spouse_readingScore);
                spouse_writingCLB = celpipToCLB("writing", spouse_writingScore);
                spouse_listeningCLB = celpipToCLB("listening", spouse_listeningScore);
                spouse_speakingCLB = celpipToCLB("speaking", spouse_speakingScore);
            } else if (spouse_clbType === "tcf") {
                spouse_readingCLB = tcfToCLB("reading", spouse_readingScore);
                spouse_writingCLB = tcfToCLB("writing", spouse_writingScore);
                spouse_listeningCLB = tcfToCLB("listening", spouse_listeningScore);
                spouse_speakingCLB = tcfToCLB("speaking", spouse_speakingScore);
            }
        
            // Calculate points for each CLB skill level
            let spouse_clbReadingPoints = getPointsForCLBSpouse(spouse_readingCLB);
            let spouse_clbWritingPoints = getPointsForCLBSpouse(spouse_writingCLB);
            let spouse_clbListeningPoints = getPointsForCLBSpouse(spouse_listeningCLB);
            let spouse_clbSpeakingPoints = getPointsForCLBSpouse(spouse_speakingCLB);

            let spouse_clbPoints = spouse_clbReadingPoints + spouse_clbWritingPoints + spouse_clbListeningPoints + spouse_clbSpeakingPoints;



            if (userHasSpouse) {
                clbSecondLanguagePoints = Math.min(22, clbSecondLanguagePoints)
                spouseFactors.style.display = "block";
            } else {
                spouseFactors.style.display = "none";
            }
            

            // Calculate points for Canadian work experience
            let workCanadaPoints = getPointsForWorkCanada(userHasSpouse, parseFloat(workCanada.value));

            let spouse_workCanadaPoints = getPointsForWorkCanadaSpouse(parseFloat(spouse_workCanada.value));
            
            let skillTransferabilityPoints = getPointsForSkillTransferability(workCanadaYears, workForeignYears, certificateOfQualification, readingCLB, writingCLB, listeningCLB, speakingCLB, educationLevel)

            // Sum up all the points
            let totalPoints = (isNaN(agePoints) ? 0 : agePoints) + (isNaN(educationPoints) ? 0 : educationPoints) + (isNaN(clbPoints) ? 0 : clbPoints) + (isNaN(clbSecondLanguagePoints) ? 0 : clbSecondLanguagePoints) + (isNaN(workCanadaPoints) ? 0 : workCanadaPoints);

            totalPoints += additionalPoints + skillTransferabilityPoints;

            if (userHasSpouse) {
                totalPoints += spouse_workCanadaPoints + spouse_educationPoints + spouse_clbPoints;
            }

            if (!isNaN(totalPoints) && !allEmpty) {
                result.innerText = `Your points: ${totalPoints}`;
            } else {
                result.innerText = "";
            }
        }

        age.oninput = updatePoints;

        let educationRadios = document.getElementsByName("education");
        educationRadios.forEach(function (radio) {
            radio.addEventListener("change", updatePoints);
        });

        let spouseRadios = document.getElementsByName("hasSpouse");
        spouseRadios.forEach(function (radio) {
            radio.addEventListener("change", updatePoints);
        });

        let clbTypeRadios = document.getElementsByName("_CLBtype");
        clbTypeRadios.forEach(function (radio) {
            radio.addEventListener("change", updatePoints);
        });
    
        let clbType2Radios = document.getElementsByName("_CLBtype2");
        clbType2Radios.forEach(function (radio) {
            radio.addEventListener("change", updatePoints);
        });

        let clbInputs = document.querySelectorAll('input[name^="CLB"]');
        clbInputs.forEach(function (input) {
            input.addEventListener("input", updatePoints);
        });

        let spouseInputs = document.querySelectorAll('input[name^="spouse_"]');
        spouseInputs.forEach(function (input) {
            input.addEventListener("input", updatePoints);
        });

        let additionalInputs = document.querySelectorAll('input[type="checkbox"');
        additionalInputs.forEach(function (input) {
            input.addEventListener("input", updatePoints);
        });

        document.getElementById("update_button").addEventListener("click", updatePoints);

        workCanada.oninput = updatePoints;

        workForeign.oninput = updatePoints;

        spouse_workCanada.oninput = updatePoints;


    }



    main();

});
