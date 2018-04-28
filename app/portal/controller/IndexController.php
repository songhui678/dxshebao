<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2018 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 老猫 <thinkcmf@126.com>
// +----------------------------------------------------------------------
namespace app\portal\controller;

use app\portal\service\PostService;
use cmf\controller\HomeBaseController;

class IndexController extends HomeBaseController {
	public function index() {

		$postService = new PostService();

		$shebaoData = $postService->publishedAll(2);
		$gjjData = $postService->publishedAll(3);
		$this->assign('shebaoData', $shebaoData->items());
		$this->assign('gjjData', $gjjData->items());
		// return $this->display($content);
		return $this->fetch(':index');
	}
}
