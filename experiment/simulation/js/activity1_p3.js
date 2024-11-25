function activity1_p3() {
    let btn_txt = get_collapse_btn_text('t distribution table', 'div-step-tb2');
    maindiv.innerHTML += `
    ${btn_txt}
    <div class='collapse divide' id='div-step-tb2'><h4 class='center-text fs-20px'>f - table (for &alpha; = 0.025)</h4> <br>


    <div id="verify-a1p2-tab" >

        <br>

        <div id='tb-box3'></div>
        <br><br>

        <p>We are taking <span style='display: inline-block;'>$$ \\alpha \\ = \\ 0.05 $$</span> so you can refer above table for &alpha;/2 i.e table for 0.025</p>

        <br>
        <div style='text-align: center;'><button id='p25-btn' onclick='verify_threshold_div();' class='btn btn-info'>Next</button></div> 
    </div>
    </div>`;
    let header = [
        "<span>$$ df $$</span>",
        "<span>$$ 1 $$</span>",
        "<span>$$ 2 $$</span>",
        '<span>$$ 3 $$</span>',
        "<span>$$ 4 $$</span>",
        "<span>$$ 5 $$</span>",
        "<span>$$ 6 $$</span>",
        "<span>$$ 7 $$</span>",
        "<span>$$ 8 $$</span>",
        "<span>$$ 9 $$</span>",
        "<span>$$ 10 $$</span>",
        "<span>$$ 11 $$</span>",
        "<span>$$ 12 $$</span>",
        "<span>$$ 13 $$</span>",
        "<span>$$ 14 $$</span>",
        "<span>$$ 15 $$</span>",
        "<span>$$ 16 $$</span>",
        "<span>$$ 17 $$</span>",
        "<span>$$ 18 $$</span>",
        "<span>$$ 19 $$</span>",
    ];
    let f_table_array = [];
    let all_keys = Object.keys(f_distribution_data);
    for (let i = 0; i < all_keys.length - 1; i++) {
        let st = '';
        if (i != 0) {
            st = i.toString();
        }
        f_table_array.push([
            (f_distribution_data[i]["1"]),
            (f_distribution_data[i]["2"]).toFixed(3),
            (f_distribution_data[i]["3"]).toFixed(3),
            (f_distribution_data[i]["4"]).toFixed(3),
            (f_distribution_data[i]["5"]).toFixed(3),
            (f_distribution_data[i]["6"]).toFixed(3),
            (f_distribution_data[i]["7"]).toFixed(3),
            (f_distribution_data[i]["8"]).toFixed(3),
            (f_distribution_data[i]["9"]).toFixed(3),
            (f_distribution_data[i]["10"]).toFixed(3),
            (f_distribution_data[i]["11"]).toFixed(3),
            (f_distribution_data[i]["12"]).toFixed(3),
            (f_distribution_data[i]["13"]).toFixed(3),
            (f_distribution_data[i]["14"]).toFixed(3),
            (f_distribution_data[i]["15"]).toFixed(3),
            (f_distribution_data[i]["16"]).toFixed(3),
            (f_distribution_data[i]["17"]).toFixed(3),
            (f_distribution_data[i]["18"]).toFixed(3),
            (f_distribution_data[i]["19"]).toFixed(3),
            (f_distribution_data[i]["20"]).toFixed(3)
        ]);
    }
    console.log(f_table_array);
    let tb_box = document.getElementById('tb-box3');
    let new_table = new Display_Table(header, f_table_array, tb_box);
    new_table.load_table();
    hide_all_steps();
    setTimeout(() => { show_step('div-step-tb2'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_threshold_div() {
    let btn_txt = get_collapse_btn_text('t distribution table', 'div-step-tn');
    maindiv.innerHTML += `
    ${btn_txt}
    <div class='collapse divide' id='div-step-tn'><h4 class='center-text fs-20px'>t - table</h4> <br>


    <div class="col">

        <div class="row">
            <div class="col-md-6" style="text-align: center;"><span>$$ F_{(1-\\alpha/2, n_1 - 1, n_2 - 1)}  \\ = \\ $$</span></div>
            <div class="col-md-6"><input class="form-control mt-3" id='fl-inp'><span style='display: none;' id='dsp-fl'></span></div>
        </div>

        <div class="row"> 
            <div class="col-md-6" style="text-align: center;"><span>$$ F_{(\\alpha/2, n_1 - 1, n_2 - 1)} \\ = \\ $$</span></div>
            <div class="col-md-6"><input class="form-control mt-3" id='fu-inp'><span style='display: none;' id='dsp-fu'></span></div>
        </div>

        <div style='text-align: center;' id='a1p32-btn-1'><button class="btn btn-info" onclick='verify_t_vals();'>Verify</button></div>

    </div>
    </div>`;
    hide_all_steps();
    setTimeout(() => { show_step('div-step-tn'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    test_hypothesis();
}
function test_hypothesis() {
    f_lower_limit = 0;
    f_upper_limit = 0;
    //generate upper and lower bound (thresholds)
    let new_n1 = n1 - 1;
    let new_n2 = n2 - 1;
    f_upper_limit = f_distribution_data[`${new_n1}`][new_n2 - 1];
    f_lower_limit = -f_upper_limit;
    console.log(`threshold values => (${f_lower_limit}, ${f_upper_limit})`);
    //compare the statistical value with upper and lower values
    if (calculated_z >= f_lower_limit && calculated_z <= f_upper_limit) {
        hypothesis_passed = 2;
    }
    else {
        hypothesis_passed = 1;
    }
}
function verify_t_vals() {
    let next_btn = document.getElementById('a1p32-btn-1');
    let val1 = document.getElementById('fl-inp');
    let val2 = document.getElementById('fu-inp');
    let sp1 = document.getElementById('dsp-fl');
    let sp2 = document.getElementById('dsp-fu');
    console.log(f_lower_limit, f_upper_limit);
    if (!verify_values(parseFloat(val1.value), f_lower_limit)) {
        alert('t(2n-2, 1 - alpha/2) is incorrect check again');
        return;
    }
    if (!verify_values(parseFloat(val2.value), f_upper_limit)) {
        alert('t(2n-2, alpha/2) is incorrect check again');
        return;
    }
    next_btn.remove();
    val1.remove();
    val2.remove();
    sp1.innerText = f_lower_limit.toFixed(4);
    sp2.innerText = f_upper_limit.toFixed(4);
    sp1.style.display = 'block';
    sp2.style.display = 'block';
    alert('Entered Values are correct');
    // render_t_table()
    //activity1_p3();
    activity1_p4();
}
// activity1_p3();
//# sourceMappingURL=activity1_p3.js.map