var honorModal = new Vue({
  el: '#honor-box',
  data: {
    honors: [
     {
       url:"https://homework.mizholdings.com/kacha/xcx/page/1609031468711.jpg",
     },
     {
       url:"https://homework.mizholdings.com/kacha/xcx/page/1609032046187.jpg"
     },
     {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609032096040.jpg",op:"rotate/90",
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609032131381.jpg",op:"rotate/90"
    }, {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609032175308.jpg",
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609032241066.jpg"
    }, {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609032272680.jpg",
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609032319645.jpg"
    }, {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609032341460.jpg",
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609032375100.jpg"
    }, {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609032444848.jpg",
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609032468045.jpg"
    }, {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609032513483.jpg",
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609032576800.jpg"
    }, {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609032592366.jpg",
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609032656552.jpg"
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609032687521.jpg"
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609032704358.jpg"
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609032725359.jpg"
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609032844781.jpg"
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609032864119.jpg"
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609032880336.jpg"
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609032919877.jpg"
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609032969065.jpg"
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609032987509.jpg"
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033025577.jpg"
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033047493.jpg"
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033064929.jpg"
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033093653.jpg"
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033117410.jpg"
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033158137.jpg"
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033176815.jpg"
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033229693.jpg"
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033244989.jpg"
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033260639.jpg"
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033281470.jpg"
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033297311.jpg"
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033313153.jpg"
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033334671.jpg"
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033391364.jpg"
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033427402.jpg"
    }, {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033448128.jpg"
    }, {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033473379.jpg"
    }, {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033484957.jpg"
    }, {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033494791.jpg"
    }, {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033508245.jpg"
    }, {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033520839.jpg"
    }, {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033538824.jpg"
    }, {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033549621.jpg"
    }, {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033562344.jpg"
    }, {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033573400.jpg"
    }, {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033583501.jpg"
    }, {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033594989.jpg"
    }, {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033606565.jpg"
    }, {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033620805.jpg"
    }, {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033631968.jpg"
    }, {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033643169.jpg"
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033684896.jpg"
    },
    {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033695038.jpg"
    }, {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033710020.jpg"
    }, {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033727465.jpg"
    }, {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033738271.jpg"
    }, {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033751488.jpg"
    }, {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033762294.jpg"
    }, {
      url:"https://homework.mizholdings.com/kacha/xcx/page/1609033777037.jpg"
    }, ]
  },
  methods: {

  }
});

window.onload = function () {
  $(".honor-inner").addClass("honor-border");
}


