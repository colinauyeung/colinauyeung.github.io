function moodpromood(tones){
    if(tones.length <= 0){
        return "neutral";
    }
    if(tones.length === 1){
        switch(tones[0]){
            case "RP":
                return "interestedP";
            case "RM":
                return "interestedM";
            case "Rm":
                return "interestedm";
            case "RD":
                return "interestedD";
            case "N":
                return "neutral";
            case "FD":
                return "noD";
            case "Fm":
                return "nom";
            case "FM":
                return "noM";
            case "FP":
                return "noP";

        }
    }
    if(tones.length > 1){
        switch(tones[0]){
            case "RP":
                switch(tones[1]){
                    case "RP":
                        return "excitedPP";
                    case "RM":
                        return "excitedPM";
                    case "Rm":
                        return "excitedPm";
                    case "RD":
                        return "excitedPD";
                    case "N":
                        return "interestedP";
                    case "FD":
                        return "unsurePD";
                    case "Fm":
                        return "unsurePm";
                    case "FM":
                        return "unsurePM";
                    case "FP":
                        return "unsurePP";
                }
                break;
            case "RM":
                switch(tones[1]){
                    case "RP":
                        return "excitedMP";
                    case "RM":
                        return "excitedMM";
                    case "Rm":
                        return "excitedMm";
                    case "RD":
                        return "excitedMD";
                    case "N":
                        return "interestedM";
                    case "FD":
                        return "unsureMD";
                    case "Fm":
                        return "unsureMm";
                    case "FM":
                        return "unsureMM";
                    case "FP":
                        return "unsureMP";

                }
                break;
            case "Rm":
                switch(tones[1]){
                    case "RP":
                        return "excitedmP";
                    case "RM":
                        return "excitedmM";
                    case "Rm":
                        return "excitedmm";
                    case "RD":
                        return "excitedmD";
                    case "N":
                        return "interestedm";
                    case "FD":
                        return "unsuremD";
                    case "Fm":
                        return "unsuremm";
                    case "FM":
                        return "unsuremM";
                    case "FP":
                        return "unsuremP";

                }
                break;
            case "RD":
                switch(tones[1]){
                    case "RP":
                        return "excitedDP";
                    case "RM":
                        return "excitedDM";
                    case "Rm":
                        return "excitedDm";
                    case "RD":
                        return "excitedDD";
                    case "N":
                        return "interestedD";
                    case "FD":
                        return "unsureDD";
                    case "Fm":
                        return "unsureDm";
                    case "FM":
                        return "unsureDM";
                    case "FP":
                        return "unsureDP";

                }
                break;
            case "N":
                switch(tones[1]){
                    case "RP":
                        return "questioningP";
                    case "RM":
                        return "questioningM";
                    case "Rm":
                        return "questioningm";
                    case "RD":
                        return "questioningD";
                    case "N":
                        return "sarcasm";
                    case "FD":
                        return "umnoD";
                    case "Fm":
                        return "umnom";
                    case "FM":
                        return "umnoM";
                    case "FP":
                        return "umnoP";

                }
                break;
            case "FD":
                switch(tones[1]){
                    case "RP":
                        return "rightDP";
                    case "RM":
                        return "rightDM";
                    case "Rm":
                        return "rightDm";
                    case "RD":
                        return "rightDD";
                    case "N":
                        return "noD";
                    case "FD":
                        return "bignoDD";
                    case "Fm":
                        return "bignoDm";
                    case "FM":
                        return "bignoDM";
                    case "FP":
                        return "bignoDP";

                }
                break;
            case "Fm":
                switch(tones[1]){
                    case "RP":
                        return "rightmP";
                    case "RM":
                        return "rightmM";
                    case "Rm":
                        return "rightmm";
                    case "RD":
                        return "rightmD";
                    case "N":
                        return "nom";
                    case "FD":
                        return "bignomD";
                    case "Fm":
                        return "bignomm";
                    case "FM":
                        return "bignomM";
                    case "FP":
                        return "bignomP";

                }
                break;
            case "FM":
                switch(tones[1]){
                    case "RP":
                        return "rightMP";
                    case "RM":
                        return "rightMM";
                    case "Rm":
                        return "rightMm";
                    case "RD":
                        return "rightMD";
                    case "N":
                        return "noM";
                    case "FD":
                        return "bignoMD";
                    case "Fm":
                        return "bignoMm";
                    case "FM":
                        return "bignoMM";
                    case "FP":
                        return "bignoMP";

                }
                break;
            case "FP":
                switch(tones[1]){
                    case "RP":
                        return "rightPP";
                    case "RM":
                        return "rightPM";
                    case "Rm":
                        return "rightPm";
                    case "RD":
                        return "rightPD";
                    case "N":
                        return "noP";
                    case "FD":
                        return "bignoPD";
                    case "Fm":
                        return "bignoPm";
                    case "FM":
                        return "bignoPM";
                    case "FP":
                        return "bignoPP";

                }
                break;

        }
    }
}