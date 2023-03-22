import { FaculdadeInsertData } from "../repositories/collegeRepository.js"
import * as collegeRepository from "../repositories/collegeRepository.js";

export async function insertCollege(data: FaculdadeInsertData){
    return await collegeRepository.insertCollegeDb(data);
}