input.onButtonPressed(Button.A, function () {
    change_counter_by += 1
})
input.onButtonPressed(Button.AB, function () {
    let counter = 0
    basic.showNumber(counter)
})
input.onButtonPressed(Button.B, function () {
    change_counter_by += -1
})
let change_counter_by = 0
let set_counter_to_0 = 0
