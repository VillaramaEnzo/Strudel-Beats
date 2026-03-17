// @title (TBD)
// @by Enzo Villarama

const cello = n(`<
    [~ 0] 2 [0 2] [~ 2]
    [~ 0] 1 [0 1] [~ 1]
    [~ 0] 3 [0 3] [~ 3]
    [~ 0] 2 [0 2] [~ 2]
    >*4,
    <[~ 4] [~ 3] [~ 1] [~ 2]>!4`)
    .off(1/4, x=>x.add(3))
    .off(1/2, x=>x.add(5))
    .scale("C5:minor")
    .sound("gm_cello")
    .clip(0.8).gain(0.3).room(0.5).decay(.15).delay(0.2)
    
const bass = n(`<
    [~ 0] @2 [0 2] [~ @2]
    [~ 0] @1 [0 1] [~ 1]
    [~ 0] @3 [0 3] [~ 3]
    [~ 0] @2 [0 2] [~ 2]
    >*4,
    <[~ 4] [~ 3] [~ 1] [~ 2]>!4`)
    .scale("C5:minor")
    .sound("gm_slap_bass_2")
    .gain(0.7).room(0.4).decay(.12).delay(0.5).lpf(800)
    
const kawai = n(`<
    [~ 0] 2 [0 2] [~ 2]
    [~ 0] 1 [0 1] [~ 1]
    [~ 0] 3 [0 3] [~ 3]
    [~ 0] 2 [0 2] [~ 2]
    >*4,
    <[~ 4] [~ 3] [~ 1] [~ 2]>!4`)
    .scale("C5:minor")
    .sound("kawai")
    .gain(0.4).room(2).lpf(800)
    
const drums = s(`
    <[bd:16 sd]>!4,
    [- hh - hh]!2
    `)
    .bank("RolandTR505")
    .gain(0.3)
    
stack(
    cello.jux(rev)._pianoroll(),
    bass.rev()._pianoroll(),
    kawai._pianoroll(),
    drums.rev()._punchcard()
    )
    .color("steelblue")
    .pianoroll()
    .scope()
    
    
    