function activity1_p4() {
    let btn_txt = get_collapse_btn_text('Calculate statistic value', 'a1-p4-mdiv');
    maindiv.innerHTML += `
    ${btn_txt}
    <div class='collapse divide' id='a1-p4-mdiv'><h4 class='center-text fs-20px'>Calculate Statistic </h4> <br>

        <div class="col">

            <div class="row">
                <div class="col-md-6" style="text-align: center;"><span>$$ 
                \\frac{S_1^2}{S_2^2}  \\ = \\ $$
                </span></div>
                <div class="col-md-6"><input class="form-control mt-3" id='st-inp'><span style='display: none;' id='dsp-st'></span></div>
            </div>



            <div style='text-align: center;' id='a1p34-btn-1'><button class="btn btn-info" onclick='verify_st();'>Verify</button></div>

        </div>

    </div>`;
    hide_all_steps();
    setTimeout(() => { show_step('a1-p4-mdiv'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_st() {
    let next_btn = document.getElementById('a1p34-btn-1');
    let val1 = document.getElementById('st-inp');
    let sp1 = document.getElementById('dsp-st');
    console.log(calculated_z);
    if (!verify_values(parseFloat(val1.value), calculated_z)) {
        alert('calculated statistic value is incorrect check again!!');
        return;
    }
    next_btn.remove();
    val1.remove();
    sp1.innerText = calculated_z.toFixed(5);
    sp1.style.display = 'block';
    alert('Entered Value is correct');
    //test_hypothesis()
    activity1_p4_ques();
}
function activity1_p4_ques() {
    let temp_btn = document.getElementById('a1p34-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_txt = get_collapse_btn_text('Step 2', 'div-a1-p4-ques');
    maindiv.innerHTML += `
    ${btn_txt}
    <div class='collapse divide' id='div-a1-p4-ques'>
    <h4 style='text-align: left;'  class='fb-800 fs-20px'></h4>
    <div id='q-box'></div>
    </div>`;
    let q_box = document.getElementById('q-box');
    let options = [`<span style='font-size: 16px;' >Hypothesis Failed</span>`,
        `<span style='font-size: 16px;' >Hypothesis Passed</span>`];
    let new_question = new Updated_Question('Observe whether the statistical value lies within thresholds range', options, `${hypothesis_passed}`, q_box, () => { });
    setTimeout(() => { MathJax.typeset(); }, 100);
    hide_all_steps();
    setTimeout(() => { show_step('div-a1-p4-ques'); }, 150);
    new_question.load_question();
}
//# sourceMappingURL=activity1_p4.js.map