<?php
namespace core\cases\model;

use core\Model;

class CaseStatusModel extends Model
{

    /**
     * 去前缀表名
     *
     * @var unknown
     */
    protected $name = 'cases_case_status';

    /**
     * 自动写入时间戳
     *
     * @var unknown
     */
    protected $autoWriteTimestamp = true;
    
    /*
     * 定义该表别名
     */
    public $alias_name='a_case_status';

    
   
}