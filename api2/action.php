<?php 
  header('Access-Control-Allow-Origin: *'); 
  header('Access-Control-Allow-Credentials: true'); 
  header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE'); 
  header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization'); 
  header('Content-Type: application/json; charset=UTF-8'); 

  include "db_config.php"; 
  $postjson = json_decode(file_get_contents('php://input'), true); 
  $aksi=strip_tags($postjson['aksi']); 
  $data    = array(); 


switch($aksi){
    case "add_register":
    $nama = filter_var($postjson['nama'], FILTER_SANITIZE_STRING,
    FILTER_FLAG_ENCODE_LOW);
    $nohp = filter_var($postjson['nohp'], FILTER_SANITIZE_STRING,
    FILTER_FLAG_ENCODE_LOW);
    $nik = filter_var($postjson['nik'], FILTER_SANITIZE_STRING,
    FILTER_FLAG_ENCODE_LOW);
    $umur = filter_var($postjson['umur'], FILTER_SANITIZE_STRING,
    FILTER_FLAG_ENCODE_LOW);
    $alamat = filter_var($postjson['alamat'], FILTER_SANITIZE_STRING,
    FILTER_FLAG_ENCODE_LOW);
    $kelamin = filter_var($postjson['kelamin'], FILTER_SANITIZE_STRING,
    FILTER_FLAG_ENCODE_LOW); 
    $lahir = filter_var($postjson['lahir'], FILTER_SANITIZE_STRING,
    FILTER_FLAG_ENCODE_LOW);
    $agama = filter_var($postjson['agama'], FILTER_SANITIZE_STRING,
    FILTER_FLAG_ENCODE_LOW);
    $status = filter_var($postjson['status'], FILTER_SANITIZE_STRING,
    FILTER_FLAG_ENCODE_LOW);
    $darah = filter_var($postjson['darah'], FILTER_SANITIZE_STRING,
    FILTER_FLAG_ENCODE_LOW);
    try {
    $sql = "INSERT INTO relawan
    (nama,nohp,nik,umur,alamat,kelamin,lahir,agama,status,darah) VALUES
    (:nama, :nohp, :nik, :umur, :alamat, :kelamin, :lahir, :agama, :status, :darah)";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':nama', $nama, PDO::PARAM_STR);
    $stmt->bindParam(':nohp', $nohp, PDO::PARAM_STR);
    $stmt->bindParam(':nik', $nik, PDO::PARAM_STR);
    $stmt->bindParam(':umur', $umur, PDO::PARAM_STR);
    $stmt->bindParam(':alamat', $alamat, PDO::PARAM_STR);
    $stmt->bindParam(':kelamin', $kelamin, PDO::PARAM_STR);
    $stmt->bindParam(':lahir', $lahir, PDO::PARAM_STR);
    $stmt->bindParam(':agama', $agama, PDO::PARAM_STR);
    $stmt->bindParam(':status', $status, PDO::PARAM_STR);
    $stmt->bindParam(':darah', $darah, PDO::PARAM_STR);
    
    $stmt->execute();
    if($sql) $result = json_encode(array('success' =>true));
    else $result = json_encode(array('success' => false, 'msg'=>'error ,
    please try again'));
    echo $result;
    }
    catch(PDOException $e)
    {
    echo $e->getMessage();
    }
    break;
    case "getdata": 
        $limit = filter_var($postjson['limit'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW); 
        $start = filter_var($postjson['start'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);    
    try { 
        $sql = "SELECT * FROM relawan ORDER BY id DESC LIMIT :start,:limit"; 
        $stmt = $pdo->prepare($sql); 
        $stmt->bindParam(':start', $start, PDO::PARAM_STR); 
        $stmt->bindParam(':limit', $limit, PDO::PARAM_STR);           
        $stmt->execute(); 
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);           
        foreach($rows as $row){             
          $data[] = array( 

    'id' => $row['id'],
    'nama' => $row['nama'],
    'nohp' => $row['nohp'],
    'nik' => $row['nik'],
    'umur' => $row['umur'],
    'alamat' => $row['alamat'],
    'kelamin' => $row['kelamin'],
    'lahir' => $row['lahir'],
    'agama' => $row['agama'],
    'status' => $row['status'],
    'darah' => $row['darah']


);            
} 
if($stmt) $result = json_encode(array('success'=>true, 'result'=>$data)); 
else $result = json_encode(array('success'=>false)); 
echo $result; 
}  
catch(PDOException $e) { 
echo $e->getMessage(); 
}          
break; 
}
?>