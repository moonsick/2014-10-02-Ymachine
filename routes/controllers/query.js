/**
 * Created by wealab04 on 2014-05-30.
 */
//쿼리를 나열하고 exports를 통해 배포하도록 한다.

exports.chkAccount = 'select * from account where account=? and pswd=?';

exports.boardlist = 'SELECT * FROM customer_board order by id desc';

exports.boardget = 'select * from customer_board where id=?';


// title, content, file, writer, href
exports.boardinsert = 'insert into customer_board(id, title, content, writer,company, contact, email, date) values(null,?,?,null,null,null,null,now())';
// title, content, file, href, id

exports.boardinsert2 = 'insert into notice(id, title, content, date, img) values(null,?,?,now(),?)';

exports.boardmodify = 'update customer_board set title=?, content=?, contact=?, email=?, date=now() where id=?';

exports.boardremove = 'delete from customer_board where id=?';

