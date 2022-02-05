// let a = Math.sgrt(4)
// alert(a)



// SWITCH-CASE
// if else
// let lang = prompt('На каком языке ты хочешь просматривать контент')
// if(lang == 'русский'){
//     alert('Вы выбрали язык "русскиу", добро пожаловать')
// }else if(lang == 'english'){
//     alert('Вы выбрали язык "english", добро пожаловать')
// }else if(lang == 'french'){
//     alert('Вы выбрали язык "French", добро пожаловать')
// }else{
//     alert('No language')
// }

// switch case
// let lang = prompt('На каком языке ты хочешь просматривать контент')
// switch(lang){
//     case'rus':
//         alert('Вы выбрали язык "русскиу", добро пожаловать');
//         break;
//     case'eng':
//         alert('Вы выбрали язык "english", добро пожаловать')
//         break;
//     case'fren':
//         alert('Вы выбрали язык "French", добро пожаловать')
//         break;
//     default:
//         alert('No language') 
//         break;
// }


let sel = document.getElementById('select_1')
let p = document.getElementById('par')
sel.addEventListener("change", function(){
    let a = sel.value
    if(a == "American_Dad"){
        p.innerHTML = 
        `    <div class="DADDY">
        <h1>American Dad!</h1>
        <img src="./img/thumb-1920-1105455.jpg" alt="">
        <div class="info">
            <div class="info1">
                <h1>About sitcom</h1>
                <p>American Dad! is an American adult animated sitcom created by Seth MacFarlane, Mike Barker, and Matt Weitzman for the Fox Broadcasting Company and currently on TBS. American Dad! is the first television series to have its inception on the network's Animation Domination block. The series premiered on February 6, 2005, following Super Bowl XXXIX, with the rest of the first season airing three months later beginning May 1, 2005. American Dad! is a joint production between Underdog Productions, Fuzzy Door Productions and 20th Television Animation and syndicated by 20th Television.</p>
            </div>
            <div class="info2">
                <h1>Awards</h1>
                <p>American Dad! has been nominated for numerous awards, most prominently four Primetime Emmy Awards and two Annie Awards. In June 2013, it was awarded as top television series by the American Society of Composers, Authors and Publishers. Since its debut, American Dad! has broadcast 323 episodes (as of January 24, 2022). The total number of seasons and organization of episodes within those seasons are in dispute because of a discrepancy in how official sources report this information. One model suggests the first season of American Dad! comprises the first 7 episodes, while another model suggests the first season comprises 23 episodes.

                    Beginning on October 20, 2014, TBS picked up the series for the 12th season following the final 3 episodes airing on Fox as the 11th season. TBS and Cartoon Network (via their late-night block, Adult Swim, both owned by AT&T's subsidiary WarnerMedia), air reruns of the series.</p>
            </div>
        </div>
    </div>`
    }else if(a == "Family_Guy"){
        p.innerHTML =    
        `    <div class="DADDY">
        <h1>Family Guy</h1>
        <img src="./img/MV5BODEwZjEzMjAtNjQxMy00Yjc4LWFlMDAtYjhjZTAxNDU3OTg3XkEyXkFqcGdeQXVyOTM2NTM4MjA@._V1_.jpg" alt="">
        <div class="info">
            <div class="info1">
                <h1>About sitcom</h1>
                <p>Family Guy is an American adult animated sitcom created by Seth MacFarlane and developed by MacFarlane and David Zuckerman for the Fox Broadcasting Company that premiered on January 31, 1999. The series is produced by Fuzzy Door Productions.

                    The series centers on the Griffins, a family consisting of parents Peter and Lois; their children, Meg, Chris, and Stewie; and their anthropomorphic pet dog, Brian. The show is set in the fictional city of Quahog, Rhode Island, and exhibits much of its humor in the form of metafictional cutaway gags that often lampoon American culture</p>
            </div>
            <div class="info2">
                <h1>Awards</h1>
                <p>Family Guy and its cast have been nominated for 27 Emmy Awards, with 8 wins. MacFarlane won the Outstanding Voice-Over Performance award for his performance as Stewie; Murphy and MacFarlane won the Outstanding Music and Lyrics award for the song "You Got a Lot to See" from the episode "Brian Wallows and Peter's Swallows"; Steven Fonti won the Outstanding Individual Achievement in Animation award for his storyboard work in the episode "No Chris Left Behind"; and Greg Colton won the Outstanding Individual Achievement in Animation award for his storyboard work in the episode "Road to the Multiverse". The show was nominated for eleven Annie Awards, and won three times, twice in 2006 and once in 2008. In 2009, it was nominated for an Emmy for Outstanding Comedy Series, becoming the first animated program to be nominated in this category since The Flintstones in 1961.</p>
            </div>
        </div>
    </div>`
    }else if(a == "Simpsons"){
        p.innerHTML = 
        `    <div class="DADDY">
        <h1>Simpsons</h1>
        <img src="./img/0-11-467x697.jpg" alt="">
        <div class="info">
            <div class="info1">
                <h1>About sitcom</h1>
                <p>
                    The Simpsons is an American adult animated sitcom created by Matt Groening for the Fox Broadcasting Company. The series is a satirical depiction of American life, epitomized by the Simpson family, which consists of Homer, Marge, Bart, Lisa, and Maggie. The show is set in the fictional town of Springfield and parodies American culture and society, television, and the human condition.

The family was conceived by Groening shortly before a solicitation for a series of animated shorts with producer James L. Brooks. He created a dysfunctional family and named the characters after his own family members, substituting Bart for his own name; he thought Simpson was a funny name in that it sounded similar to "simpleton". The shorts became a part of The Tracey Ullman Show on April 19, 1987. After three seasons, the sketch was developed into a half-hour prime time show and became Fox's first series to land in the Top 30 ratings in a season (1989–1990).
                </p>
            </div>
            <div class="info2">
                <h1>Awards</h1>
                <p>The Simpsons has won dozens of awards since it debuted as a series, including 34 Primetime Emmy Awards, 34 Annie Awards and a Peabody Award. In a 1999 issue celebrating the 20th century's greatest achievements in arts and entertainment, Time magazine named The Simpsons the century's best television series. In that same issue, Time included Bart Simpson in the Time 100, the publication's list of the century's 100 most influential people. Bart was the only fictional character on the list. On January 14, 2000, the Simpsons were awarded a star on the Hollywood Walk of Fame. Also in 2000, Entertainment Weekly magazine TV critic Ken Tucker named The Simpsons the greatest television show of the 1990s. </p>
            </div>
        </div>
    </div>`
    }
} )