<?php
class DatabaseHelper {
    public static function createConnection($details) {
        try {
            $conn = new PDO($details['dsn'], $details['username'], $details['password']);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            return $conn;
        } catch (PDOException $e) {
            throw new Exception("Connection error: " . $e->getMessage());
        }
    }

    public static function runQuery($connection, $sql, $parameters = []) {
        $statement = $connection->prepare($sql);
        $statement->execute($parameters);
        return $statement;
    }
}

class CustomerLogonDB {
    private $conn;

    public function __construct($pdo) {
        $this->conn = $pdo;
    }

    public function getByUserName($userName) {
        $stmt = $this->conn->prepare("SELECT * FROM CustomerLogon WHERE UserName = ?");
        $stmt->execute([$userName]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function updatePassword($id, $pass, $shaPass) {
        $sql = "UPDATE CustomerLogon SET Pass = ?, Password_sha256 = ? WHERE CustomerID = ?";
        $statement = DatabaseHelper::runQuery($this->conn, $sql, [$pass, $shaPass, $id]);
    }
}



?>