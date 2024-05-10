    function solution (params) 
        
     solution(angle) {
        
        var answer = 0
        
        if(angle <90) { //예각
            answer = 1
        } else if (angle == 90) { //직각
            answer =2
        } else if (angle == 180) { //평각
            answer=4
        } else { //나머지는 둔각뿐이다.
            answer =3
        }
        
        return answer
    }
