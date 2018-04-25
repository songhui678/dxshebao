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
use app\portal\model\PortalCategoryModel;
use app\portal\service\PostService;
use cmf\controller\HomeBaseController;

class ShebaochangshiController extends HomeBaseController {
	public function index() {
		$id = $this->request->param('id', 0, 'intval');
		$portalCategoryModel = new PortalCategoryModel();
		if ($id == 0) {
			$category = $portalCategoryModel->where('id', 1)->where('status', 1)->find();
			$postService = new PostService();
			$data = $postService->publishedAll();
			$this->assign('articles', $data->items());
			$this->assign('page', $data->render());
			$this->assign('category', $category);
			return $this->fetch(':shebaochangshi_index');
		} else {
			$category = $portalCategoryModel->where('id', $id)->where('status', 1)->find();
			$this->assign('category', $category);
			return $this->fetch(':shebaochangshi');
		}

	}
}
