export interface center {
    center_id: number,
    name: String,
    address: String,
    state_name: String,
    district_name: String,
    block_name: String,
    pincode:number,
    from: String,
    to: String,
    lat: number,
    long: number,
    fee_type: String,
    session_id: String,
    date: String,
    available_capacity: number,
    available_capacity_dose1: number,
    available_capacity_dose2: number,
    fee: number,
    allow_all_age: boolean,
    min_age_limit: number,
    vaccine: String,
    slots: []
}