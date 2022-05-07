
const BOX_COLORS = ['#FECD45', '#2568FB', '#5EBEC4', '#F92C85', '#9DAAF2', '#4A5FC1', '#EAD6CD', '#9CF6FB', '#E1FCFD',  '#394F8A', '#490B3D', '#BD1E51', '#00ABE1', '#161F6D']
const boxes = $('.box');
const boxContainer = $('.boxContainer');

const columnButton = $('#column');
const rowButton = $('#row');
const jcStartButton = $('#jc-start');
const jcCenterButton = $('#jc-center');
const jcEndButton = $('#jc-end');
const jcSpaceAround = $('#jc-space-around');
const jcSpaceEvenly = $('#jc-space-evenly');
const jcSpaceBetween = $('#jc-space-between');

const aiStartButton = $('#ai-start');
const aiCenterButton = $('#ai-center');
const aiEndButton = $('#ai-end');
const aiStretchButton = $('#ai-stretch');
const aiBaselineButton = $('#ai-baseline');

const acStartButton = $('#ac-start');
const acCenterButton = $('#ac-center');
const acEndButton = $('#ac-end');
const acSpaceAround = $('#ac-space-around');
const acSpaceEvenly = $('#ac-space-evenly');
const acSpaceBetween = $('#ac-space-between');
const acStretchButton = $('#ac-stretch');

const incrementButton = $('.flexItems .controllersContainer .increment')
const decrementButton = $('.flexItems .controllersContainer .decrement')

const asStartButton = $('#as-start');
const asCenterButton = $('#as-center');
const asEndButton = $('#as-end');
const asStretchButton = $('#as-stretch');
const asBaselineButton = $('#as-baseline');


boxes.each((index, element)=>{
    $(element).css({'background-color': BOX_COLORS[Math.floor(Math.random() * BOX_COLORS.length + 1)]})
})

columnButton.on('click', () =>{
    const boxes = $('#flexDirectionContainer .box');
    $('#flexDirectionContainer .boxContainer').animate({'height': `${boxes.outerHeight() * boxes.length}px`}, 2.5)
    $('#flexDirectionContainer .box').each((index, element) =>{
        $(element).css({'transform' : `translate(${-boxes.outerWidth() * index}px, ${boxes.outerWidth() * index}px)`})
    })
})

rowButton.on('click', () =>{
    const boxes = $('#flexDirectionContainer .box');
    $('#flexDirectionContainer .boxContainer').animate({'height': `${boxes.outerHeight() + (boxes.outerHeight(  ) / 2)}px`}, 5)
    $('#flexDirectionContainer .box').each((index, element) =>{
        $(element).css({'transform' : `translate(0px, 0px)`})
    })
})

jcStartButton.on('click', () =>{
    const boxes = $('#justifyContentContainer .box');
    $('#justifyContentContainer .box').css({'transform' : `translate(0px, 0px)`})
    
})
jcCenterButton.on('click', () =>{
    const boxes = $('#justifyContentContainer .box');
    const boxContainer = $('#justifyContentContainer .boxContainer');
    $('#justifyContentContainer .box').css({'transform' : `translateX(${(boxContainer.outerWidth() - (boxes.outerWidth() * boxes.length)) / 2}px)`})
   
})

jcEndButton.on('click', () =>{
    const boxes = $('#justifyContentContainer .box');
    const boxContainer = $('#justifyContentContainer .boxContainer');
    $('#justifyContentContainer .box').css({'transform' : `translateX(${(boxContainer.outerWidth() - (boxes.outerWidth() * boxes.length))}px)`})
    
})

jcSpaceAround.on('click', () =>{
    const boxes = $('#justifyContentContainer .box');
    const boxContainer = $('#justifyContentContainer .boxContainer');
    // $('#justifyContentContainer .box').css({'transform' : `translateX(${((boxContainer.outerWidth() - (boxes.outerWidth() * boxes.length)) / 4) / 2  }px)`})
    $('#justifyContentContainer .box').each((index, element) =>{
        $(element).css({'transform' : `translateX(${(((boxContainer.outerWidth() - (boxes.outerWidth() * boxes.length)) / 4)/2) +  (((boxContainer.outerWidth() - (boxes.outerWidth() * boxes.length)) / 4) * index) }px)`})
    })
})
jcSpaceEvenly.on('click', () =>{
    const boxes = $('#justifyContentContainer .box');
    const boxContainer = $('#justifyContentContainer .boxContainer');
    // $('#justifyContentContainer .box').css({'transform' : `translateX(${((boxContainer.outerWidth() - (boxes.outerWidth() * boxes.length)) / 4) / 2  }px)`})
    $('#justifyContentContainer .box').each((index, element) =>{
        $(element).css({'transform' : `translateX(${(((boxContainer.outerWidth() - (boxes.outerWidth() * boxes.length)) / 5)) +  (((boxContainer.outerWidth() - (boxes.outerWidth() * boxes.length)) / 5) * index) }px)`})
    })
})
jcSpaceBetween.on('click', () =>{
    const boxes = $('#justifyContentContainer .box');
    const boxContainer = $('#justifyContentContainer .boxContainer');
    // $('#justifyContentContainer .box').css({'transform' : `translateX(${((boxContainer.outerWidth() - (boxes.outerWidth() * boxes.length)) / 4) / 2  }px)`})
    $('#justifyContentContainer .box').each((index, element) =>{
        $(element).css({'transform' : `translateX(${(((boxContainer.outerWidth() - (boxes.outerWidth() * boxes.length)) / 3) * index) }px)`})
    })
})

aiStartButton.on('click', () =>{
    const boxContainer = $('#alignItemsContainer .boxContainer');
    boxContainer.css({'padding-bottom': 50})
    $('#alignItemsContainer .box').css({'transform' : `translate(0px, 0px)`, 'height': `100px`})
    
})

aiCenterButton.on('click', () =>{
    const boxes = $('#alignItemsContainer .box');
    const boxContainer = $('#alignItemsContainer .boxContainer');
    boxContainer.css({'padding-bottom': 50})
    $('#alignItemsContainer .box').css({'transform' : `translate(0px, ${(boxContainer.outerHeight() - boxes.outerHeight()) / 2}px)`,'height': `100px`})
    
})
aiEndButton.on('click', () =>{
    const boxes = $('#alignItemsContainer .box');
    const boxContainer = $('#alignItemsContainer .boxContainer');
    boxContainer.css({'padding-bottom': 50})
    $('#alignItemsContainer .box').css({'transform' : `translate(0px, ${boxContainer.outerHeight() - boxes.outerHeight()}px)`, 'height': `100px`})
    
})
aiStretchButton.on('click', () =>{
    const boxContainer = $('#alignItemsContainer .boxContainer');
    boxContainer.css({'padding-bottom': 0})
    $('#alignItemsContainer .box').css({'transform' : `translate(0px, 0px)`, 'height': `${boxContainer.outerHeight()}px`})
})

aiBaselineButton.on('click', () =>{
    const boxes = $('#alignItemsContainer .box');
    const boxContainer = $('#alignItemsContainer .boxContainer');
    boxContainer.css({'padding-bottom': 50})
    boxes.each((index, elemet) =>{
        $(elemet).css({'transform': `translateY(${40 - $(elemet).css('font-size').replace('px', "")}px)`, 'height': `100px`})
    })
    $(boxes[1]).css({'transform': 'translateY(0px)'})
})

acStartButton.on('click', () =>{
    const boxes = $('#alignContentContainer .acboxes');
    boxes.css({'transform': `translateY(${0}px)`, 'height': '100px'})
})

acCenterButton.on('click', () =>{
    const boxes = $('#alignContentContainer .acboxes');
    const boxContainer = $('#alignContentContainer .boxContainer');
    boxes.css({'transform': `translateY(${(boxContainer.outerHeight() - (boxes.outerHeight() * 2)) /2}px)`, 'height': '100px'})
})

acEndButton.on('click', () =>{
    const boxes = $('#alignContentContainer .acboxes');
    const boxContainer = $('#alignContentContainer .boxContainer');
    boxes.css({'transform': `translateY(${boxContainer.outerHeight() - (boxes.outerHeight() * 2)}px)`, 'height': '100px'})
})

acSpaceAround.on('click', () =>{
    const boxes = $('#alignContentContainer .acboxes');
    const boxContainer = $('#alignContentContainer .boxContainer');
    boxes.each((index, element) =>{
        $(element).css({'transform': `translateY(${((boxContainer.outerHeight() - (boxes.outerHeight() * 2)) / 4) + (((boxContainer.outerHeight() - (boxes.outerHeight() * 2) ) / 2) * index)}px)`, 'height': '100px'})
    })
    // boxes.css({'transform': `translateY(${boxContainer.outerHeight() - (boxes.outerHeight() * 2)}px)`})
})

acSpaceEvenly.on('click', () =>{
    const boxes = $('#alignContentContainer .acboxes');
    const boxContainer = $('#alignContentContainer .boxContainer');
    boxes.each((index, element) =>{
        $(element).css({'transform': `translateY(${((boxContainer.outerHeight() - (boxes.outerHeight() * 2)) / 3) + (((boxContainer.outerHeight() - (boxes.outerHeight() * 2) ) / 3) * index)}px)`, 'height': '100px'})
    })
    // boxes.css({'transform': `translateY(${boxContainer.outerHeight() - (boxes.outerHeight() * 2)}px)`})
})

acSpaceBetween.on('click', () =>{
    const boxes = $('#alignContentContainer .acboxes');
    const boxContainer = $('#alignContentContainer .boxContainer');
    boxes.each((index, element) =>{
        $(element).css({'transform': `translateY(${((boxContainer.outerHeight() - (boxes.outerHeight() * 2) ) * index)}px)`, 'height': '100px'})
    })
    // boxes.css({'transform': `translateY(${boxContainer.outerHeight() - (boxes.outerHeight() * 2)}px)`})
})
acStretchButton.on('click', () =>{
    const boxes = $('#alignContentContainer .acboxes');
    const boxContainer = $('#alignContentContainer .boxContainer');
    boxes.css({'transform': `translateY(${0}px)`})
    boxes.css({'height': `${boxContainer.outerHeight() / 2}px`})
    // boxes.css({'transform': `translateY(${boxContainer.outerHeight() - (boxes.outerHeight() * 2)}px)`})
})

const flexOrder = () =>{
    const box1Order = $('#box1-order').text();
    const box2Order = $('#box2-order').text();
    const box3Order = $('#box3-order').text();
    const box4Order = $('#box4-order').text();
    const box1 = $('#order-box1')
    const box2 = $('#order-box2')
    const box3 = $('#order-box3')
    const box4 = $('#order-box4')
    box1.css({'order': `${parseInt(box1Order)}`})
    box2.css({'order': `${parseInt(box2Order)}`})
    box3.css({'order': `${parseInt(box3Order)}`})
    box4.css({'order': `${parseInt(box4Order)}`})
}
const flexGrow = () =>{
    const box1Grow = $('#box1-grow').text();
    const box2Grow = $('#box2-grow').text();
    const box3Grow = $('#box3-grow').text();
    const box4Grow = $('#box4-grow').text();
    const box1 = $('#grow-box1')
    const box2 = $('#grow-box2')
    const box3 = $('#grow-box3')
    const box4 = $('#grow-box4')
    box1.css({'flex-grow': `${parseInt(box1Grow)}`})
    box2.css({'flex-grow': `${parseInt(box2Grow)}`})
    box3.css({'flex-grow': `${parseInt(box3Grow)}`})
    box4.css({'flex-grow': `${parseInt(box4Grow)}`})
}
const flexShrink = () =>{
    const box1Shrink = $('#box1-shrink').text();
    const box2Shrink = $('#box2-shrink').text();
    const box3Shrink = $('#box3-shrink').text();
    const box4Shrink = $('#box4-shrink').text();
    const box1 = $('#shrink-box1')
    const box2 = $('#shrink-box2')
    const box3 = $('#shrink-box3')
    const box4 = $('#shrink-box4')
    box1.css({'flex-shrink': `${parseInt(box1Shrink)}`})
    box2.css({'flex-shrink': `${parseInt(box2Shrink)}`})
    box3.css({'flex-shrink': `${parseInt(box3Shrink)}`})
    box4.css({'flex-shrink': `${parseInt(box4Shrink)}`})
}

incrementButton.on('click', (e) =>{
    
    const value = $(e.target).prev();
    value.text(parseInt(value.text()) + 1)
    console.log($(e.target).parent().attr('class'))
    if($(e.target).parent().attr('class') === 'orderButtons'){
        flexOrder()
    }else if($(e.target).parent().attr('class') === 'growButtons'){
        flexGrow()
        
    }else if($(e.target).parent().attr('class') === 'shrinkButtons'){
        console.log('ss')
        flexShrink()
    }
})

decrementButton.on('click', (e) =>{
    const value = $(e.target).next();
    if(parseInt(value.text()) >= 1){
        value.text(parseInt(value.text()) - 1)
        if($(e.target).parent().attr('class') === 'orderButtons'){
            flexOrder()
        }else if($(e.target).parent().attr('class') === 'growButtons'){
            flexGrow()
            
        }else if($(e.target).parent().attr('class') === 'shrinkButtons'){
            console.log('ss')
            flexShrink()
        }
    }
    
})


// const asStartButton = $('#as-start');
// const asCenterButton = $('#as-center');
// const asEndButton = $('#as-end');
// const asStretchButton = $('#as-stretch');
// const asBaselineButton = $('#as-baseline');

asStartButton.on('click', () =>{
    const box = $('#alignSelfContainer .box:nth-child(3)')
    box.css({'transform': `translateY(0)`, 'height': `${100}px`})
})
asEndButton.on('click', () =>{
    const box = $('#alignSelfContainer .box:nth-child(3)')
    const boxContainer = $('#alignSelfContainer .boxContainer')
    box.css({'transform': `translateY(${boxContainer.outerHeight() - box.outerHeight()}px)`, 'height': `${100}px`})
})

asCenterButton.on('click', () =>{
    const box = $('#alignSelfContainer .box:nth-child(3)')
    const boxContainer = $('#alignSelfContainer .boxContainer')
    box.css({'transform': `translateY(${(boxContainer.outerHeight() - box.outerHeight()) / 2}px)`, 'height': `${100}px`})
})
asStretchButton.on('click', () =>{
    const box = $('#alignSelfContainer .box:nth-child(3)')
    const boxContainer = $('#alignSelfContainer .boxContainer')
    box.css({'transform': `translateY(0)`, 'height': `${boxContainer.outerHeight()}px`})
})

asBaselineButton.on('click', () =>{
    const box = $('#alignSelfContainer .box:nth-child(3)')
    box.css({'transform': `translateY(28px)`, 'height': `${100}px`})
})