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

class ContactController extends HomeBaseController {
	public function index() {
		$postService = new PostService();
		$page = $postService->publishedPage(2);
		if (empty($page)) {
			abort(404, ' 页面不存在!');
		}

		$this->assign('page', $page);
		// $more = $page['more'];
		// $tplName = empty($more['template']) ? 'page' : $more['template'];
		return $this->fetch(':about');
	}
}
