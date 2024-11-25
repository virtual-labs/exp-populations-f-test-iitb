function activity1_p2() {
    let btn_txt = get_collapse_btn_text('Calculate statistic value', 'a1-p3-mdiv');
    maindiv.innerHTML += `
    ${btn_txt}
    <div class='collapse divide' id='a1-p3-mdiv'><h4 class='center-text fs-20px'>Calculate Statistic </h4> <br>

        <div class="col">

            <div class="row">
                <div class="col-md-6" style="text-align: center;"><span>$$ \\overline{x_1} \\ = \\ $$</span></div>
                <div class="col-md-6"><input class="form-control mt-3" id='avg-x1-inp'><span style='display: none;' id='dsp-x1-bar'></span></div>
            </div>

            <div class="row"> 
                <div class="col-md-6" style="text-align: center;"><span>$$ \\overline{x_2} \\ = \\ $$</span></div>
                <div class="col-md-6"><input class="form-control mt-3" id='avg-x2-inp'><span style='display: none;' id='dsp-x2-bar'></span></div>
            </div>

            <div class="row">
                <div class="col-md-6" style="text-align: center;"><span>$$ Sample \\ Variance \\ S_1^2 \\ = \\ $$</span></div>
                <div class="col-md-6"><input class="form-control mt-3" id='var1-inp'><span style='display: none;' id='dsp-var1'></span></div>
            </div>

            <div class="row">
                <div class="col-md-6" style="text-align: center;"><span>$$ Sample \\ Variance \\ S_2^2 \\ = \\ $$</span></div>
                <div class="col-md-6"><input class="form-control mt-3" id='var2-inp'><span style='display: none;' id='dsp-var2'></span></div>
            </div>

            <div style='text-align: center;' id='a1p2-btn-1'><button class="btn btn-info" onclick='verify_avg_sum();'>Verify</button></div>

        </div>

    </div>`;
    hide_all_steps();
    setTimeout(() => { show_step('a1-p3-mdiv'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_avg_sum() {
    let next_btn = document.getElementById('a1p2-btn-1');
    let val1 = document.getElementById('avg-x1-inp');
    let val2 = document.getElementById('avg-x2-inp');
    let val3 = document.getElementById('var1-inp');
    let val4 = document.getElementById('var2-inp');
    let sp1 = document.getElementById('dsp-x1-bar');
    let sp2 = document.getElementById('dsp-x2-bar');
    let sp3 = document.getElementById('dsp-var1');
    let sp4 = document.getElementById('dsp-var2');
    console.log(x1_bar, x2_bar, sample_variance_1, sample_variance_2);
    if (!verify_values(parseFloat(val1.value), x1_bar)) {
        alert('x1 bar is incorrect check again');
        return;
    }
    if (!verify_values(parseFloat(val2.value), x2_bar)) {
        alert('x2 bar is incorrect check again');
        return;
    }
    if (!verify_values(parseFloat(val3.value), sample_variance_1)) {
        alert('sample variance of x1 is incorrect check again');
        return;
    }
    if (!verify_values(parseFloat(val4.value), sample_variance_2)) {
        alert('sample variance of x2 is incorrect check again');
        return;
    }
    next_btn.remove();
    val1.remove();
    val2.remove();
    val3.remove();
    val4.remove();
    sp1.innerText = x1_bar.toFixed(4);
    sp2.innerText = x2_bar.toFixed(4);
    sp3.innerText = sample_variance_1.toFixed(4);
    sp4.innerText = sample_variance_2.toFixed(4);
    sp1.style.display = 'block';
    sp2.style.display = 'block';
    sp3.style.display = 'block';
    sp4.style.display = 'block';
    alert('Entered Values are correct');
    // render_t_table()
    //activity1_p3();
    activity1_p3();
}
//# sourceMappingURL=activity1_p2.js.map