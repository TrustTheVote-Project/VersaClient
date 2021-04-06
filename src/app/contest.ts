export interface Contest {
    id: string,
    name: string,
    ballot_title?: string,
    ballot_subtitle?: string,
    district: any // TODO: District interface
    type: string // canddiate or ballot measure? 
    // Candidate 
    // TODO
    // Party and Office and votes allowed?

    // Ballot Measure
    measure_type?: string,
    full_text?: string,
    info_uri?: string, // url
    summary?: string,
    pro_statment?: string,
    con_statement?: string,
    effect_of_abstain?: string,
    passage_threshold?: number
    

}
