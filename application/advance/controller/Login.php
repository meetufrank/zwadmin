<?php
// +----------------------------------------------------------------------
// | ichat-v3.0
// +----------------------------------------------------------------------
// | Author: NickBai <1902822973@qq.com>
// +----------------------------------------------------------------------
namespace app\advance\controller;


use think\Config;
use cms\Controller;
use cms\Response;
use core\cases\model\ChatUserModel;
use app\manage\service\ViewService;
use app\common\App;
class Login extends Controller
{
    
        /**
     * 网站标题
     *
     * @var unknown
     */
    protected $siteTitle;
    
    //展示登录页面
    public function index()
    {
        $this->siteTitle='advance|medical 登录';
 
         
        
        return $this->fetch();
    }

    //处理登录
    public function doLogin()
    {

        $chatuser=new ChatUserModel;
        if(request()->isAjax()){

            $userName = input('post.user_name');
            if(empty($userName)){
                return json(['code' => -3, 'data' => '', 'msg' => '用户名不能为空']);
            }

            $pwd = input('post.pwd');
            if(empty($pwd)){
                return json(['code' => -4, 'data' => '', 'msg' => '密码不能为空']);
            }
           $where=[
               'user_name'=>$userName,
               'u_status'=>1
           ];
 
            $user = $chatuser->field('id,user_name,pwd,sign,avatar,is_manager')
                ->where($where)->find();
           
            if(empty($user)){
                return json(['code' => -1, 'data' => '', 'msg' => '用户不存在']);
            }

            if( md5($pwd) != $user['pwd'] ){
                return json(['code' => -2, 'data' => '', 'msg' => '密码错误']);
            }

            //设置用户登录
            $chatuser->where('id', $user['id'])->setField('status', 1);

            //设置session标识状态
            cookie('phone_user_name', $user['user_name']);
            cookie('phone_user_id', $user['id']);
            cookie('phone_user_sign', $user['sign']);
            cookie('phone_user_avatar', $user['avatar']);
            if(!empty(cookie('amback'))){
                $url= cookie('amback');
            }else{
                $url=url('/am');
            }
            return json(['code' => 1, 'data' => $url, 'msg' => '登录成功']);
        }

        $this->error('非法访问');
    }
    
           /**
     *
     * {@inheritdoc}
     *
     * @see Controller::beforeViewRender()
     */
    protected function beforeViewRender()
    {
        // 网站标题
        $this->assign('site_title', $this->siteTitle);
    }

    /**
     *
     * {@inheritdoc}
     *
     * @see Controller::getView()
     */
    protected function getView()
    {
        return ViewService::getSingleton()->getView();
    }
    
       //退出
    public function logout() {
        cookie('phone_user_id', null);
        cookie('phone_user_name', null);
        cookie('phone_user_sign', null);
        cookie('phone_user_avatar', null);
        if(!empty(cookie('amback'))){
                $url= cookie('amback');
            }else{
                $url=url('/am');
            }

            $this->success('退出成功',$url,'',2);
    }
    
    
   /*
    * 注册接口
    */
    public function register_user(){
        if(request()->isPost()){
            
      
        //再次验证是否通过
        $count=$this->valid();
        if($count){
          
        }else{
             echo 'faild';
        }
      }else{
          
          return $this->fetch();
      }
    }
    
    /*
     * 保险用户验证
     */
    public function valid_user(){
        
        $count=$this->valid();
        if($count){
            echo 'success';
        }else{
            echo 'faild';
        }
    }
    
    protected function valid() {
        $nickname='测试';
        $tel='1111';
        $email='65464@qq.com';
        $policy='1231231231231';
        $data=[
           'name'=>$nickname,
            'tel'=>$tel,
            'email'=>$email,
            'policy'=>$policy,
        ];
        $where=[
            'name'=>$data['name'],
            'tel'=>$data['tel'],
            'email'=>$data['email'],
            'policy'=>$data['policy'],
            'status'=>0
        ];
        $count=db('cases_chatuser_bx')->where($where)->count();
        return $count;
    }
}
