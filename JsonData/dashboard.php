<?php 
header('Content-type: text/json; charset=utf-8');
function __autoload($class_name) {
    include '../class/'.$class_name.'.php';
}
set_time_limit(0);
$conn_DB= new EnDeCode();
$read="../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_db=$conn_DB->Read_Text();
$conn_DB->conn_PDO();
$rslt = array();
$series = array();
    include_once '../template/plugins/function_date.php';
    include_once '../template/plugins/funcDateThai.php';
if (empty($_GET['data'])) {
     if($date >= $bdate and $date <= $edate){
                             $y= $Yy;
                             $Y= date("Y");
                             $year = $Yy;
                             $years = $year + 543;
                            }else{
                            $y = date("Y");
                            $Y = date("Y") - 1;
                            $year = date('Y');
                            $years = $year + 543;
                            }
                        } else {
                            $YeaR=$_GET['data'];
                            $y = $_GET['data'] - 543;
                            $Y = $y - 1;
                            $year = $_GET['data'] - 543;
                            $years = $year + 543;
                        }
                        $date_start = "$Y-10-01";
                        $date_end = "$y-09-30";
                            $sql_sum = "SELECT count(repair_id) sumRep
                                            ,(SELECT count(repair_id) FROM m_repair_pd WHERE IFNULL(result, 0)+end_process=0 and (repair_date between '$date_start' and '$date_end')) wait
                                            #,(SELECT count(repair_id) FROM m_repair_pd WHERE IFNULL(result, 0)+end_process=0 AND send_repair=1 and (repair_date between '$date_start' and '$date_end')) send
                                            ,(SELECT count(repair_id) FROM m_repair_pd WHERE result+end_process=1 and (repair_date between '$date_start' and '$date_end')) notSuc
                                            ,(SELECT count(repair_id) FROM m_repair_pd WHERE result+end_process=2 and (repair_date between '$date_start' and '$date_end')) Suc
                                            FROM m_repair_pd 
                                        WHERE repair_date between '$date_start' and '$date_end'";
                            $conn_DB->imp_sql($sql_sum);
                            $sum_rm=$conn_DB->select_a();
                            
                            $series['total'] = (int) $sum_rm['sumRep'];
                            //$series['assessment'] = (int) $sum_rm['send'];
                            $series['Y'] = (int) $sum_rm['wait'];
                            $series['R'] = (int) $sum_rm['notSuc'];
                            $series['G'] = (int) $sum_rm['Suc'];
                            $series['fyear'] = $years;
                            $series['date_start'] = DateThai1($date_start);
                            $series['date_end'] = DateThai1($date_end);
                            print json_encode($series);
$conn_DB->close_PDO();
                            ?>